import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Image, Grid, Segment, Message } from 'semantic-ui-react';
import axios from 'axios'

const Login = (props) => {
    // loginData will store the email and Password input by user and is sent to the backend to verify
    const[loginData, setLoginData] = useState({ email: '', password: ''})

    const submitHandler = event => {
        event.preventDefault();
    }

    const changeHandler = event => {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }


    return (
        <Grid textAlign='center' verticalAlign='middle' style={{height: "100vh"}}>
            <Grid.Column style={{maxWidth: 500}}>
                <Form onSubmit={submitHandler}>
                    <Segment>
                        <Form.Input fluid type='email' placeholder='Email' icon='user' iconPosition='left' name='email' value={loginData.email} onChange={changeHandler} required />
                        <Form.Input fluid type='password' placeholder='Password' icon='lock' iconPosition='left' name='passowrd' value={loginData.passowrd} onChange={changeHandler} required />
                    
                    </Segment>

                </Form>
            </Grid.Column>
        </Grid>
    )
}

export default Login