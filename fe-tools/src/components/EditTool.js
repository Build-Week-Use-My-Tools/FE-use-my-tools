import React, { useState, useEffect } from 'react'
import { Form, Grid, Segment, Checkbox } from 'semantic-ui-react';
import axios from 'axios';

const initialTool = {
    borrowed: false,
    toolname: "",
    quantity: "",
    price: "",
    image: "",
}

export default function EditTool(props) {
    const [userCredentials, setCredentials] = useState(initialTool);

    //{headers: {"Content-Type": "application/json" }}

    const id = parseInt(props.match.params.id);

    
    // const specificTool =  if (props.allToolList) {return props.allToolList.find(tool => tool.toolid === id)} else {false}
    console.log('props.alltoollist', props.allToolList)

    useEffect(() => {
        const specificTool = props.allToolList ? props.allToolList.find(tool => tool.toolid === id) : false
        if(specificTool) setCredentials(specificTool)
    }, [id])

    

    const submitHandler = event => {
        event.preventDefault();

        axios.put(`https://bw-usemytools.herokuapp.com/data/tools/${id}`, userCredentials,  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
            .then(response => {
                // console.log(response.config.data);
                // const newTList = props.allToolList.filter(tol => tol.toolid !== response.config.data.toolid)
                // newTList.unshift(response.config.data.toolid)
                props.setAllToolList([...props.allToolList, userCredentials])
                props.history.push("/mainpage");
            })
            .catch(error => console.log(error.response))
    }

    const deleteHandler = event => {
        event.preventDefault();

        axios.delete(`https://bw-usemytools.herokuapp.com/data/tools/delete/${id}`, userCredentials,  {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
             .then(res => {
                console.log(res.data)
                props.setAllToolList([...props.allToolList, userCredentials])
            })
             .catch(err => console.log(err.response))
    }

    const changeHandler = event => {
        setCredentials({ ...userCredentials, [event.target.name]: event.target.value })
    }

    const rentHandler = event => {
        console.log('renthandler fired')
        setCredentials(userCredentials.borrowed === false ? { ...userCredentials, [event.target.name]: true } : { ...userCredentials, [event.target.name]: false })
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
                            <Form.Checkbox type='checkbox' name='borrowed' label="Rent Tool" value={userCredentials.borrowed} onChange={rentHandler} />

                            <Form.Button fluid content="Edit Tool" size="large" />
                            <Form.Button fluid onClick={deleteHandler} content="Delete Tool" size="large" />
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}