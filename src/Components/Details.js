import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const URL = `https://api.github.com/users`;
    useEffect(() => {
      axios.get(URL).then((res) => {
        setData(res.data)
        })
      .catch((err)=> {
          console.log(err);
      })
    }, [id]);

    const showData = data.map((item, index) => {
        console.log('item',item);
       return(
        <div key={index} className="col-6 test">
           <h1> {(index += 1)} </h1>
        <div className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row no-gutters">
            <div className="col-md-4 card-left">
              <img src={item.avatar_url} className="profilpic" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.login}</h5>
                <a
                  className="btn btn-info logo"
                  href={item.html_url}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} className="fa-2x logo" />
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    );

  return (
        <div className="container">
          <h2>Details</h2>
          <hr />
          <div className="row">{showData}</div>
        </div>
      );

 

};

export default Details;
