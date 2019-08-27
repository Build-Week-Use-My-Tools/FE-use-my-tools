import React from "react";
import {Card, Image} from 'semantic-ui-react';


const ToolCard = (props) => {
    console.log(props);
    return (
    <div>
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

export default ToolCard;