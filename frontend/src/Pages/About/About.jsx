import './About.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About({setLinkChange}) {

    //for tabs
    const [toggleTab,setToggleTab]=useState(1);
  
    const toggleFunc = (index)=> {
      setToggleTab(index);
  
    }

     //for link change(home -> back)
  useEffect(() => {
    setLinkChange(false);
  
    return () => {
      console.log("Returned");
    }
  });

  return (
      <></>
  )
}