import React from "react";
import Main from "./src/Main";
import Notification from "./src/Notification";
const Home = ({ index }) => {
  if(index === 0) {
    return (
      <>
        <Main />
        <Notification />
      </>
    );
  }
  else {
    return null ; 
  }
};

export default Home;
