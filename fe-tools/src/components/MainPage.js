import React, {useState, useEffect} from 'react'
import Navigation from "./Navigation"
import ToolCard from "./ToolCard"

const MainPage = (props) => {

    return (
        <section>
            <h1>MainPage</h1>
            <Navigation/>
            <div>
                {props.allToolList.map((tool) => {
                    return <ToolCard     key={tool.ownerid}
                                        MainPageprops={tool}
                    />
                })}
            </div>
        </section>
    );
};

export default MainPage;