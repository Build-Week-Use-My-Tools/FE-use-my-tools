import React, {Fragment} from 'react';

function Tools(props) {
  console.log(props);
  const tool = props.toolfind.find(
    tool => tool.id === parseInt(props.match.params.toolid, 10)
  );

  return (
    <Fragment>
      <img  src={tool.img} alt={tool.name} />
      <div >
        <h1>{tool.name}</h1>
        <h4>({tool.nickname})</h4>
      </div>
    </Fragment>
  );
}

export default Tools;