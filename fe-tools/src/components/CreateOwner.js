import React, { useState } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';


export default function CreateOwner(props) {
    const [userCredentials, setCredentials] = useState({
        firstname: "",
        lastname: "",
    });

    const submitHandler = event => {
        event.preventDefault();

        axios.post("https://bw-usemytools.herokuapp.com/newowner", userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(response => {
                console.log(response.data);
                props.history.push("/mainpage");
            })
            .catch(error => console.log(error.response))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
                <Grid.Column style={{ maxWidth: 500 }}>

                    <Form onSubmit={submitHandler}>
                        <Segment>
                            <Form.Input fluid type="text" placeholder="First Name" name="firstname" onChange={changeHandler} value={userCredentials.firstname} required />
                            <Form.Input fluid type="text" placeholder="Last Name" name="lastname" onChange={changeHandler} value={userCredentials.lastname} required />

                            <Form.Button fluid content="Create Owner" size="large" />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}