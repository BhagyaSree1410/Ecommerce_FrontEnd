import React , { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';
import { Button, Form, Grid, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';

class Login  extends Component {
state = {
    email :'',
    password :'',
    isLogin : false
}
handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
        ...this.state,
        [evt.target.name] : value
    })
    console.log(this.state);
}
handleSubmit = (event) => {
    var apiUrl = "http://localhost:8080/users/";
    var payload = {
        "email" : this.state.email,
        "password" : this.state.password
    }
    axios.post(apiUrl+'login', payload)
        .then(response => {
            console.log(response.data, "response post")
            console.log(response.data.code);
            if(response.data){
                console.log("login successful");
            }else if(response.data.code === 400){
                console.log("Inavlid Credentials");
            }else {
                console.log("unable to login");
            }
        })
        .catch(error => {
            console.log(error);
        })
}
render() {
    return (
    <div>
        <Grid textAlign='center' style={{ height: '90vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                        <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                        />
                        <Button color='blue' fluid size='large'>Login</Button>
                    </Segment>
                </Form>
                <NavLink to = '/register'>
                    <Message>
                        New to us?Sign Up
                    </Message> 
                </NavLink>
            </Grid.Column>
        </Grid>
    </div>
    );
}
}

export default Login;