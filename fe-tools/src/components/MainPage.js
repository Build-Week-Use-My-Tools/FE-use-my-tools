import React from 'react'
import MainNav from "./MainNav"
import ToolCard from "./ToolCard"

const MainPage = (props) => {
    console.log(props)
    return (
        <section>
            <h1>Use My Tools</h1>
            <MainNav props={props}/>
            <div id="cards">
                {props.allToolList.map((tool, ind) => {
                    return <ToolCard     key={ind}
                                        MainPageprops={tool}
                                        />
                                    })}
            </div>
        </section>
    );
};

export default MainPage;