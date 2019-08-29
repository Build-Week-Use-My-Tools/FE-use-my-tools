import React from "react";
import {Card, Image} from 'semantic-ui-react';
import {NavLink} from "react-router-dom";


const ToolCard = (props) => {
    console.log(props);
    return (
        <Card id="card">
            <Card.Content>
                <div key={props.MainPageprops.toolid}>
                <h1>Tool: {props.MainPageprops.toolname}</h1>
                    <div><Image src={props.MainPageprops.image}/>
                            <p>Rental Price:${props.MainPageprops.price}</p>
                            <p>Quantity: {props.MainPageprops.quantity}</p>
                            <NavLink to="/edittool" className="editbutton">Edit Tool</NavLink>
                            </div>
                            </div>
            </Card.Content>
        </Card>
    );
};

export default ToolCard;