import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', nickname: '',};

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, nickname, password, passwordConfirmation } = this.state; 
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation) 
      handleRegister({ email, nickname, password, passwordConfirmation }, history);
    else
      alert('Passwords Do Not Match')
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const {email, nickname,password, passwordConfirmation} = this.state;
    return (
      <Segment basic>
        <Header as = 'h2' textAlign = 'center'>Register</Header>
        <Form onSubmit = {this.handleSubmit}>
          <Form.Input 
            autofocus
            required
            label = 'Email'
            name='email'
            value={email}
            placeholder='name@example.com'
            onChange={this.handleChange}
          />
          <Form.Input 
            autoFocus
            required
            label = 'Username'
            name = 'nickname'
            value = {nickname}
            placeholder = 'JonSnow42069'
            onChange = {this.handleChange}
          />
          <Form.Input 
            required
            label = 'Password'
            name='password'
            value={password}
            placeholder='Password'
            type = 'password'
            onChange={this.handleChange}
          />
          <Form.Input 
            required
            label = 'Confirm Password'
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password'
            type = 'password'
            onChange={this.handleChange}
          />
          <Button type = 'submit'>Register</Button>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register {...this.props} auth={auth} /> }
      </AuthConsumer>
    )
  }
}