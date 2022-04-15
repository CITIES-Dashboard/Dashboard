import './Vis.css';
import React from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";

function Vis({title1,title2,title3,detail1,detail2,detail3, link1,link2,link3}) {
  const [toggleState, setToggleState] = useState(1);


  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="vis-space">
      <div className="tab-space">
        <tab
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Graph 1
        </tab>
        <tab
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Graph 2
        </tab>
        <tab
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Graph 3
        </tab>
      </div>

      <div className="content-space">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>{title1}</h2>
          <hr />
          <p>
            {detail1}
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>{title2}</h2>
          <hr />
          <p>
            {detail2}
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>{title3}</h2>
          <hr />
          <p>
            {detail3}
          </p>
        </div>
      </div>

      <Link to={'/project'}>
                    <div className="button"> Download Raw Data </div>
        </Link>

    </div>
  );
}

export default Vis;

