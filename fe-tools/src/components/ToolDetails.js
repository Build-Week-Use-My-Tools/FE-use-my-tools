import React, {Fragment} from 'react';
import { Route, NavLink } from 'react-router-dom';


import AvengerInfo from './AvengerInfo';
import AvengerMovies from './AvengerMovies';

// How do we get the match object here?
function Tools(props) {
  console.log(props);
  const tool = props.toolfind.find(
    tool => tool.id === parseInt(props.match.params.toolid, 10)
  );

  return (
    <Fragment>
      <img className="character-image" src={avenger.img} alt={avenger.name} />
      <div className="character-info-wrapper">
        <h1>{avenger.name}</h1>
        <h4>({avenger.nickname})</h4>

        <nav>
          <Link to={`/avengers/${avenger.id}/info`}>Info</Link>
          <Link to={`/avengers/${avenger.id}/movies`}>Movies</Link>
        </nav>
      </div>
    </Fragment>
  );
}

export default Tools;