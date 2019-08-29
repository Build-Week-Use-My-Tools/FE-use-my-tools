import React, { useState, useEffect } from 'react'
import { Form, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';

const initialTool = {
    borrowed: false,
    toolname: "",
    quantity: "",
    price: "",
    image: "",
}

export default function EditTool(props) {
    const [userCredentials, setCredentials] = useState({
        borrowed: false,
        toolname: "",
        quantity: "",
        price: "",
        image: "",
    });

    //{headers: {"Content-Type": "application/json" }}


    useEffect(() => {
        const id = props.match.params.id;
        const specificTool = props.allToolList.find(tool => `${tool.toolid}` === id)
        if(specificTool) setCredentials(specificTool)
    }, [props.allToolList, props.match.params.id])

    console.log('props in edit tool page need match prop', props)

    const submitHandler = event => {
        event.preventDefault();

        axios.put(`https://bw-usemytools.herokuapp.com/data/tools/${userCredentials.id}`, userCredentials,  {headers: {"Content-Type": "application/json" }})
            .then(response => {
                console.log(response);
                setCredentials(initialTool)
                props.setAllToolList(response.data)
                props.history.push("/mainpage");
            })
            .catch(error => console.log(error.response))
    }

    const deleteHandler = event => {
        event.preventDefault();

        axios.delete(`https://bw-usemytools.herokuapp.com/data/tools/${userCredentials.id}`, userCredentials, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}  } )
             .then(res => {
                console.log(res.data)
                props.setAllToolList(res.data)
            })
             .catch(err => console.log(err.response))
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

                            <Form.Button fluid content="Edit Tool" size="large" />
                            <Form.Button fluid onClick={deleteHandler} content="Delete Tool" size="large" />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}