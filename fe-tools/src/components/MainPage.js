import React, {useState, useEffect} from 'react'
import axios from "axios";
import Navigation from "./Navigation"
import ToolDetails from "./ToolDetails"

const MainPage = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("")
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
                    return <ToolDetails     key={tool.id}
                                            image={tool.image}
                                            name={tool.name}
                    />
                })}
            </div>
        </section>
    );
};

export default MainPage;