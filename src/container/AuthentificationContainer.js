import React from 'react';

import { register } from '../service/Api'

class AuthentificationContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }

  handleSubmit = (event) => {
      event.preventDefault()
      console.log('submit registrer', this.state)
      register(this.state)
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
  }

  render() {
    const { username, email, password } = this.state
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
            <label>Nom d'utilisateur : </label>
            <input name='username' onChange={this.handleChange} value={username} />
            <label>Email : </label>
            <input name='email' onChange={this.handleChange} value={email} />
            <label>Mot de passe : </label>
            <input name='password' onChange={this.handleChange} value={password} />
            <button type='submit'>S'ENREGISTRER</button>
        </form>
    )
  }
}

export default AuthentificationContainer;
