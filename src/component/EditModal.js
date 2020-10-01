import React from 'react';
import ReactModal from 'react-modal'

import { createNote, updateNote } from '../service/Api'

class EditModal extends React.Component {
    constructor(props) {
        super();
        this.state = {
            id: props.note ? props.note.id : null,
            title: props.note ? props.note.title : null,
            description: props.note ? props.note.description : null,
            isOpen: props.isOpen
            }
        ReactModal.setAppElement('body')
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOpenModal = () => {
        this.setState({isOpen: true})
    }

    handleCloseModal = () => {
        this.setState({isOpen: false})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        createNote(this.state)
        .then(() => console.log('La note a été ajoutée'))
    }

    render() {
        const { title, description, isOpen } = this.state
        return(
            <div>
                <button onClick={this.handleOpenModal}>OPEN MODAL</button>
                <ReactModal isOpen={isOpen}>
                    <form onSubmit={this.handleSubmit}>
                        <label>Titre : </label>
                        <input name='title' onChange={this.handleChange} value={title} />
                        <label>Description : </label>
                        <input name='description' onChange={this.handleChange} value={description} />
                        <button type='submit'>AJOUTER</button>
                    </form>
                    <button onClick={this.handleCloseModal}>CLOSE MODAL</button>

                </ReactModal>
            </div>
        )
    }
}

export default EditModal;
