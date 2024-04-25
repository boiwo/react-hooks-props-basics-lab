import React from "react";
import Links from "./Links";




function Bio(props) {
  const bioPresent = props.Bio
  if (bioPresent) {
    return <p>{props.Bio}</p>
  }
  else{
    return null
  }
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio Bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links/>
    </div>
  );
}


export default About;
