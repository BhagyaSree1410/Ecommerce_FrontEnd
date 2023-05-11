import React , { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Input, Form } from 'semantic-ui-react';
import axios from 'axios';

class Register extends Component {
    state = {
        userName : '',
        email : '',
        password : '',
        contact : '',
        address : ''
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
        var apiUrl = "http://localhost:8080/users";
        var payload = {
            "userName" : this.state.userName,
            "email" : this.state.email,
            "password" : this.state.password,
            "contact" : this.state.userName,
            "address" : this.state.address
        }
        axios.post(apiUrl, payload)
            .then(response => {
                console.log(response.data, "response post")
                console.log(response.data.code);
            })
            .catch(error => {
                console.log(error);
            })
    }
    render(){
        return(
            <div>
                <Form>
                    <Form.Field>
                        <Input type="text" name= "userName" value={this.userName} onChange ={this.handleChange}></Input>
                    </Form.Field>
                    <Form.Field>
                        <Input type="text" name= "email" value={this.email} onChange ={this.handleChange}></Input>
                    </Form.Field>
                    <Form.Field>
                        <Input type="password" name= "password" value={this.password} onChange ={this.handleChange}></Input><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input type="text" name= "contact" value={this.contact} onChange ={this.handleChange}></Input><br/>
                    </Form.Field>
                    <Form.Field>
                        <Input type="text" name= "address" value={this.address} onChange ={this.handleChange}></Input><br/>
                    </Form.Field>
                    <Form.Field>
                        <Button type="submit" color="blue" onClick={(event) => this.handleSubmit(event)}>SignUp</Button>
                    </Form.Field>
                </Form>
            </div>
        );
    }
}

export default Register;