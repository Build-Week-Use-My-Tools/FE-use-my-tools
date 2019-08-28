import React from 'react'
import Navigation from "./Navigation"
import ToolCard from "./ToolCard"

const MainPage = (props) => {

    return (
        <section>
            <h1>MainPage</h1>
            <Navigation props={props}/>
            <div id="cards">
                {props.allToolList.map((tool) => {
                    return<ToolCard     key={tool.ownerid}
                                        MainPageprops={tool}
                                        />
                                    })}
            </div>
        </section>
    );
};

export default MainPage;