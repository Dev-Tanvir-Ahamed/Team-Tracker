import React from 'react';
import { Link } from 'react-router-dom';
import './Teams.css'

const Teams = (props) => {
    // console.log(props);
    let {strSport, strTeamBadge, strAlternate, idTeam} = props.team
  
    return (
        <div className='teamStyle'>
            <div className='team'>
            <img src={strTeamBadge} alt=""/>
              <h1>{strAlternate}</h1>
              <p>Sports Type : {strSport}</p>
              <Link to={`/teamDetails/${idTeam}`}>
              <button className="btn btn-primary">Explore<i class="fas fa-arrow-right"></i></button>
              </Link>
            </div>
          
        </div>
    );
};

export default Teams;