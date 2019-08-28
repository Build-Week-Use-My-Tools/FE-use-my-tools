import React from 'react'
import MainNav from "./MainNav"
import ToolCard from "./ToolCard"

const MainPage = (props) => {

    return (
        <section>
            <h1>MainPage</h1>
            <MainNav props={props}/>
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