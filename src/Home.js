import React from "react";
import web from "../src/images/business-concept-with-man-sitting-rocket_23-2147800691.jpg";
import { NavLink } from "react-router-dom";
import Comman from "./Comman";

const Home = () => {
  return (
    <>
      <Comman  name="Grow Your Business With" imgsrc={web} visit="/service" btname="Get Started"/>
    </>
  )
}

export default Home;
