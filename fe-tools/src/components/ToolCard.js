import React from "react";
import {Card, Image} from 'semantic-ui-react';
import {NavLink} from "react-router-dom";
import Axios from "axios";



const ToolCard = (props) => {

    // const requestHandler = e => {
    //     e.preventDefault();

    //     Axios.post(`https://bw-usemytools.herokuapp.com/data/{toolid}/owners/{ownerid}`,)
    // }

    return (
        <Card id="card">
            <Card.Content>
                <div key={props.MainPageprops.toolid}>
                <h1>Tool: {props.MainPageprops.toolname}</h1>
                    <div><Image src={props.MainPageprops.image}/>
                            <p>Rental Price:${props.MainPageprops.price}</p>
                            <p>Quantity: {props.MainPageprops.quantity}</p>
<<<<<<< HEAD
                            <button><NavLink to={`/edittool/${props.MainPageprops.toolid}`}>Edit Tool</NavLink></button>
                            <button>Request to Borrow</button>
=======
                            <NavLink to="/edittool" className="editbutton">Edit Tool</NavLink>
>>>>>>> f6524a3b1d1d527b0fb6a7657dbe7dec27aa2dd9
                            </div>
                            </div>
            </Card.Content>
        </Card>
    );
};

export default ToolCard;