import React, {Fragment} from 'react';

function ToolDetails(props) {
  console.log(props);
  const id = props.match.params.id;
  const tool = tool.find(tool => `${tool.id}`)

  return (
    <Fragment>
      <img  src={tool.img} alt={tool.name} />
      <div >
        <h1>{tool.name}</h1>
      </div>
    </Fragment>
  );
}

export default ToolDetails;