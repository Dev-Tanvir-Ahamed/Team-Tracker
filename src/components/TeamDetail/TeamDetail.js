import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import maleImg from '../../components/Image/male.png';
import femaleImg from '../../components/Image/female.png';
import '../TeamDetail/TeamDetail.css'

const TeamDetail = () => {
    let {idTeam} = useParams()
    let [teamDetail, setTeamDetail] = useState([])
    const {
        strTeam,
        strSport,
        strGender,
        intFormedYear,
        strTwitter,
        strYoutube,
        strFacebook,
        strCountry,
        strDescriptionEN,
        strTeamBadge,
        strTeamBanner,
      } = teamDetail;
    useEffect(() => {
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setTeamDetail(data.teams[0]))
    }, [idTeam])
    return (
        <div>
          <div className="container-fluid px-0">
            <img className="img-fluid" style={{ width: '100%', height: 'auto' }} src={strTeamBanner} alt=""/>
          </div>
          <div className="row my-5 bg-primary rounded py-3 text-white align-items-center">
            <div className="col-8 team-detail">
                <img className="teamBage" src={strTeamBadge} alt=""/>
                <h3>{strTeam}</h3>

                <ul className="list-unstyled">
                    <li>Founded : {intFormedYear}</li>
                    <li>Country : {strCountry}</li>
                    <li>Sports Type : {strSport}</li>
                    <li>Gender : {strGender}</li>
                </ul>
            </div>
            <div className="col-4 team-img">
                <img className="img-fluid" src={Object.strGender !== 'female' ? maleImg : femaleImg} alt=""/>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
                <p>{strDescriptionEN}</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <ul className="icon list-unstyled d-flex justify-content-center">
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-twitter-square"></i></li>
                        <li><i class="fab fa-youtube"></i></li>
                        <li></li>
                    </ul>
                </div>
            </div>
          </div>

        </div>
    );
};

export default TeamDetail;