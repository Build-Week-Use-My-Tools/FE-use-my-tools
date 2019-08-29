import React from "react";
import {Card, Image} from 'semantic-ui-react';


const ToolCard = (props) => {
    console.log(props);
    return (
        <Card id="card">
            <Card.Content>
                <h1>Name: {props.MainPageprops.firstname}                  {props.MainPageprops.lastname}</h1>
                <div>{props.MainPageprops.tools.map((tool) => {
                    return (<div key={tool.toolid}>
                    <div><Image src={tool.image}/>
                            <p>Rental Price:${tool.price}</p>
                            <p>Tool: {tool.toolname}</p>
                            <p>Quantity: {tool.quantity}</p>
                            </div>
                            </div>
                )})}</div>
            </Card.Content>
        </Card>
    );
};

export default ToolCard;