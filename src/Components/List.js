import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  const [data, setData] = useState([]);
  const URL = "https://api.github.com/gists/public";
  useEffect(() => {
    axios.get(URL).then((response) => {
      const data = response.data;
      setData(data);
    });
  });

  const showData = data.map((item, index) => (
    <div key={index} className="col-6 test">
      <div className="card mb-3" style={{ maxWidth: "590px", maxHeight:"350px"}}>
        <div className="row no-gutters">
          <div className="col-md-4 card-left">
            <img src={item.owner.avatar_url} className="profilpic" alt="..." />
          </div>
          <div className="col-md-8 card-right">
            <div className="card-body">
              <h5 className="card-title">{item.owner.login}</h5>
              {/* <h6>{item.description}</h6> */}
              <a
                className="btn btn-info logo"
                href={item.html_url}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="fa-ml-1 mr-1 logo"
                />
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <h2>List of Users</h2>
      <div className="row">{showData}</div>
    </div>
  );
};

export default List;
