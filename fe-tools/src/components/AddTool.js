import React, { useState } from 'react';
import { Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';
// import logo from '../assets/OLAD_logo.png';

export default function AddTool(props) {
    const [userCredentials, setCredentials] = useState({
        borrowed: false,
        toolname: "",
        quantity: "",
        price: "",
        image: ""
    });


    const submitHandler = event => {
        event.preventDefault();

        axios.post(`https://bw-usemytools.herokuapp.com/newtool`, userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(response => {
                console.log(response);
                // props.setAllToolList({...props.allToolList}, response.data)
                props.history.push("/profile");
            })

            .catch(error => console.log(error.response))
    }



    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <Grid textAlign="center" verticalAlign="top" style={{ height: "100vh" }}>
                <Grid.Column style={{ maxWidth: 500 }}>

                    <Form onSubmit={submitHandler}>
                        <Segment>
                            <Form.Input fluid type="text" placeholder="Tool Name" name="toolname" onChange={changeHandler} value={userCredentials.toolname} required />
                            <Form.Input fluid type="number" placeholder="Quantity" name="quantity" onChange={changeHandler} value={userCredentials.quantity} />
                            <Form.Input fluid type="number" placeholder="Price" name="price" onChange={changeHandler} value={userCredentials.price} />
                            <Form.Input fluid type="text" placeholder="Image" name="image" onChange={changeHandler} value={userCredentials.image} />
                            <Form.Button fluid content="Add Tool" size="large" />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}