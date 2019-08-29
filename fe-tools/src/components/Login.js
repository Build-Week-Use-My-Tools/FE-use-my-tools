import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Image, Grid, Segment, Message } from 'semantic-ui-react';
import axios from 'axios'
import logo from '../assets/handyman-tools.png'


const Login = (props) => {
    // loginData will store the email and Password input by user and is sent to the backend to verify
    const[loginData, setLoginData] = useState({ email: '', password: '' })



    const changeHandler = event => {
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }

    const loginSubmit = event => {
        event.preventDefault();
        axios.post('https://bw-usemytools.herokuapp.com/oauth/token', `grant_type=password&username=${loginData.email}&password=${loginData.password}`, {headers: { Authorization: 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0', 'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(res => {
                localStorage.setItem('token', res.data.access_token)
                props.history.push('/mainpage')
                }
            )
            .catch(err => console.log(err.response))
    }


    return (
        <div>
            <Grid textAlign='center' verticalAlign='middle' style={{height: "100vh"}}>
                <Grid.Column style={{maxWidth: 500}}>
                    <Image centered src={logo} alt='Logo' style={{width: '100px'}} />
                    <h1>Use My Tools</h1>
                    <Form onSubmit={loginSubmit}>
                        <Segment>
                            <Form.Input fluid type='text' placeholder='Email' icon='user' iconPosition='left' name='email' value={loginData.email} onChange={changeHandler} required />
                            <Form.Input fluid type='password' placeholder='Password' icon='lock' iconPosition='left' name='password' value={loginData.password} onChange={changeHandler} required />

                            <Form.Button fluid content='Login' size='large' />
                        </Segment>
                    </Form>
                    <Message>
                        Don't have an account? <Link to='/register'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
            <div><div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"         title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"         title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div></div>
        </div>
    )
}

export default Login