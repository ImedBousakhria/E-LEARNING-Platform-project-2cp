import React, { useState } from "react";
import wrong from "../../../assets/icons/wrong.svg";
import right from "../../../assets/icons/right.svg";
import noanswer from "../../../assets/icons/noanswer.svg";

const Answerstate = () => {
  const  [questionstate, setQuestionstate] = useState(null);
  const [stateicon, setStateicon] = useState(noanswer);
  
  return (
    <button className="questionState"
      value={questionstate}
      onClick={(e) => {
        e.preventDefault() ; 
        if (stateicon === noanswer) {
          setStateicon(right);
          setQuestionstate(true);
        } else if (stateicon === right) {
          setStateicon(wrong);
          setQuestionstate(false);
        } else if (stateicon === wrong ) {
          setStateicon(noanswer);
          setQuestionstate(null);
        }
      }}
    >
      <img src={stateicon} />
    </button>
  );
};

export default Answerstate;
