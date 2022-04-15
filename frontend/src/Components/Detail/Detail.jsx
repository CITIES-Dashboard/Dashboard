import './Detail.css';
import React from 'react';
import {Link} from "react-router-dom"

function Detail({body,LinkChange,setLinkChange}){

    return (
        <div className="detail">
            <h3>DETAILS</h3>
            <div className="title-line"></div>
            <div className="body-text">
                <p>{body}</p>
            </div>           
        </div>

       
    );
}
export default Detail;