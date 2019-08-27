import React from "react";
import Navigation from "./Navigation";
import {Card, Image} from 'semantic-ui-react';


const ToolDetails = (props) => {
    console.log(props);
    return (
    <div>
        <Navigation/>
        <Card>
            <Image src={props.image}/>
            <Card.Content>
                <h1>Name: {props.name}</h1>
                <p>Rental Price:{props.price}</p>
            </Card.Content>
        </Card>
    </div>
    );
};

export default ToolDetails;