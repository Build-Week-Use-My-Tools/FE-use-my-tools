import React, {useState, useEffect} from 'react'
import axios from "axios";
import Navigation from "./Navigation"
import ToolCard from "./ToolCard"

const MainPage = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(res => {
            setState(res.data.results);
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
                    return <ToolCard     key={tool.id}
                                            image={tool.image}
                                            name={tool.name}
                    />
                })}
            </div>
        </section>
    );
};

export default MainPage;