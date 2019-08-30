import React, { useContext } from "react";
import {Card, Image} from 'semantic-ui-react';
import {NavLink} from "react-router-dom";
import Axios from "axios";
import { SetAllToolListContext } from '../contexts/SetAllToolListContext'
import { AllToolListContext } from '../contexts/AllToolListContext'



const ToolCard = (props) => {
    const setTools = useContext(SetAllToolListContext)
    const tools = useContext(AllToolListContext)
    // console.log('settools', setTools)

    // console.log('props from toolcard', props)
    // const requestHandler = e => {
    //     e.preventDefault();
    //     if(props.MainPageprops.borrowed === false) {
    //         setTools([...tools, props.MainPageprops.borrowed: true])
    //     }
    

    
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
                        {props.MainPageprops.borrowed === false ? <p>This tool is available to rent</p> : <p>This tool is not currently available</p>}
                        <NavLink to={`/edittool/${props.MainPageprops.toolid}`} className="editbutton">Edit Tool</NavLink>
                        {/* <NavLink to="/mainpage" className="editbutton">Rent</NavLink> */}
                    </div>
                </div>
            </Card.Content>
        </Card>
    );
};

export default ToolCard;