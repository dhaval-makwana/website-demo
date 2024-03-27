import React from "react";
import web from "../src/images/team.png";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

const About = () => {
  return (
    <>
      <Comman  name="Welcome To About Page" imgsrc={web} visit="/contact" btname="Contact Now"/>
    </>
  )
}

export default About;
