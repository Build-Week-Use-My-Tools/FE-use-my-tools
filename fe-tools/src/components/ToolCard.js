import React from "react";
import {Card, Image} from 'semantic-ui-react';
import {NavLink} from "react-router-dom";
import Axios from "axios";



const ToolCard = (props) => {

    console.log('props from toolcard', props)
    // const requestHandler = e => {
    //     e.preventDefault();

    
    // }

    return (
        <Card id="card">
            <Card.Content>
                <div key={props.MainPageprops.toolid}>
                    <div>   
                        <h1>Tool: {props.MainPageprops.toolname}</h1>
                    
                        <Image src={props.MainPageprops.image}/>
                        <p>Rental Price:${props.MainPageprops.price}</p>
                        <p>Quantity: {props.MainPageprops.quantity}</p>
                        <NavLink to={`/edittool/${props.MainPageprops.toolid}`} className="editbutton">Edit Tool</NavLink>
                        <NavLink to="/mainpage" className="editbutton">Rent</NavLink>
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
};

export default ToolCard;