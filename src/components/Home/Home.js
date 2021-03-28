import { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';

const Home = () => {
    let [teams, setTeam] = useState([])
    useEffect(() =>{
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(res => res.json())
      .then(data => setTeam(data.teams))
    }, [])

    return (
        <div>
            
            <h1 className="px-0 bg-dark text-light d-flex align-items-center justify-content-center" style={{height:'200px', width:' 100%'}}>Team Tracker</h1>
                {
                    teams.map(team => <Teams key={team.idTeam} team={team}></Teams>)
                } 
        </div>
    );
};

export default Home;