import React, {useState, useEffect} from 'react'
import axios from "axios";
import Navigation from "./Navigation"
import ToolCard from "./ToolCard"

const MainPage = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get('https://bw-usemytools.herokuapp.com/owners', {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }})
        .then(res => {
            console.log(res.data)
            setState(res.data);
        })
        .catch(err => 
            console.log(err))
    }, []);
    return (
        <section>
            <h1>MainPage</h1>
            <Navigation/>
            <div>
                {state.map((tool) => {
                    return <ToolCard     key={tool.ownerid}
                                        MainPageprops={tool}
                    />
                })}
            </div>
        </section>
    );
};

export default MainPage;