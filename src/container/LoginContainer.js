import React from 'react';
import { login } from '../service/Api';

class LoginContainer extends React.Component {
  constructor() {
    super()
    this.state = {
        email: '',
        password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        login(this.state)
        .then((response) => console.log(response))
        .catch((error) => console.error(error))
    }

  render() {
    const { email, password } = this.state
    return (
        <form 
            onSubmit={this.handleSubmit} 
            style={{ 
                display:'flex', 
                flexDirection: 'column', 
                maxWidth: 400, 
                alignItems:'center', 
                justifyContent:'center'
            }}>
            <label>Email : </label>
            <input type='email' name='email' onChange={this.handleChange} value={email} />
            <label>Mot de passe : </label>
            <input type='password' name='password' onChange={this.handleChange} value={password} />
            <button type='submit'>S'ENREGISTRER</button>
        </form>
    )
  }
}

export default LoginContainer;