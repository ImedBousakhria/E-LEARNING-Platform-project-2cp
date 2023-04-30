import React, { useState } from "react";
import Cancel from "../reusable/Cancel";
import Quizzprogress from "./components/Quizzprogress";
import CountdownCircle from "./components/CountdownCircle";
import Option from "./components/Option";
import { quizz } from "../../content page/Quizzes/content/main";
import A from "../../assets/scores/A.png";
import B from "../../assets/scores/B.png";
import C from "../../assets/scores/C.png";
import D from "../../assets/scores/D.png";
import F from "../../assets/scores/F.png";

const Quizzcontainer = ({ name }) => {
  /*  const [progress, setProgress] = useState(0);
  const [timer, setTimer] = useState(10); */
  const [showQuizzContainer, setShowQuizzContainer] = useState(true);
  const [selectedAnswers, setSelected] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [state, setState] = useState();
  const OptionsSelected = () => {
    // all selected are correct and all correct are selected
    let correctList = [];
    let wrongList = [];
    quizz[currentIndex].options.forEach((option, index) => {
      option.state === true ? correctList.push(index) : wrongList.push(index);
    });
    if (
      correctList.every((item) => selectedAnswers.includes(item)) &&
      wrongList.every((item) => !selectedAnswers.includes(item))
    ) {
      setScore((prev) => prev + 1);
      setState(true)
    } else {
      setState(false);
    }
    console.log(
      correctList.every((item) => selectedAnswers.includes(item)) &&
        wrongList.every((item) => !selectedAnswers.includes(item))
    );
  };

  var scoreEmoji, note, Ncolor;
  if (score < 2) {
    scoreEmoji = F;
    note = "Nice try, keep practising";
    Ncolor = "#FF5858";
  } else if (score < 5) {
    scoreEmoji = D;
    note = "Good job, you're making progress";
    Ncolor = "#FE8057";
  } else if (score < 7) {
    scoreEmoji = C;
    note = "Excellent work, you\re almost there";
    Ncolor = "#FFC558";
  } else if (score < 9) {
    scoreEmoji = B;
    note = "Impressive, you\re  a true expert";
    Ncolor = "#A1E65C";
  } else if (score === 10) {
    scoreEmoji = A;
    note = "Wow, you\re a master at this";
    Ncolor = "#5CE6B4";
  }

  /* const handlePercentage = (percentage) => {
    if (percentage > 100) {
      setProgress(100);
    } else if (percentage < 0) {
      setProgress(0);
    } else {
      setProgress(percentage);
    }
  }; */

  /*   const handleIndex = (index) => {};
  const refreshTimer = () => {};
  const showResults = () => {};
 */
  const toggleSelection = (index) => {
    const newList = selectedAnswers.filter((item) => item !== index);
    selectedAnswers.includes(index)
      ? setSelected(newList)
      : setSelected([...selectedAnswers, index]);
  };

  return showQuizzContainer ? (
    !showResults ? (
      <div className="flex flex-col justify-between gap-10 rounded-[10px] bg-assignmentbg px-4 py-2">
        {/* 
      <button onClick={() => handlePercentage(progress + 100 / quizz.length)}>
        Increase Progress
      </button>
      <div className="flex flex-col items-center gap-1">
        <Quizzprogress percentage={progress} />
        <small className=" font-semibold text-accent">
          Question {(progress * quizz.length) / 100} out of {quizz.length}
        </small>
      </div> */}

        <div className=" flex items-center justify-between">
          <h4>{name}</h4>
          <Cancel />
        </div>
        <div className=" place-self-center">
          <CountdownCircle
            duration={10}
            setTimeUp={setTimeUp}
            timeUp={timeUp}
          />
        </div>
        <div className="flex flex-col items-center gap-1">
          <Quizzprogress
            percentage={((currentIndex + 1) * 100) / quizz.length}
          />
          <small className=" font-semibold text-accent">
            Question {currentIndex + 1} out of {quizz.length}
          </small>
        </div>

        <div className=" flex flex-col gap-3">
          <p>{quizz[currentIndex].question}</p>
          <div className=" flex flex-col gap-2">
            {quizz[currentIndex].options.map((e, i) => (
              <Option
                isCorrect={e.state}
                text={e.text}
                isChosen={selectedAnswers.includes(i)}
                timeUp={timeUp}
                onClick={() => {
                  toggleSelection(i);
                }}
              />
            ))}
          </div>
        </div>
        <button
          className=" min-w-max rounded-md bg-accent p-2.5 font-semibold text-white"
          onClick={() => {
            OptionsSelected();
            if (timeUp) {
              if (currentIndex + 1 < quizz.length) {
                setCurrentIndex(currentIndex + 1),
                  setSelected([]),
                  setTimeUp(false);
              } else {
                setShowResults(true);
              }
            } else null;
          }}
        >
          Next
        </button>

      <small className={` ${state ? "text-green" : "text-wrong"} place-self-center`}> {state ? "Correct !" : "That was close !"} </small>

        {/* <button
        className=" min-w-max rounded-md bg-accent p-2.5 font-semibold text-white"
        onClick={() => {
          currentIndex < quizz.length 
            ? (
              setCurrentIndex((prev) => prev + 1),
              handlePercentage(progress + 100 / quizz.length),
              setSelected([]))
            : (handlePercentage(100), setSelected([]));
        }}
      >
        Next
      </button> */}
      </div>
    ) : (
      <div className="flex flex-col justify-between gap-20 rounded-[10px] bg-assignmentbg px-4 py-2">
        <div className="flex flex-col gap-3">
          <div className=" flex items-center justify-between">
            <h4>{name}</h4>
            <Cancel />
          </div>
          <div className="flex flex-col items-center gap-1">
            <Quizzprogress percentage={100} />
            <small className="font-semibold text-accent">Quizz completed</small>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between">
          <div className="flex min-w-max flex-col items-center gap-2 p-4">
            <img src={scoreEmoji} alt="" className="" />
            <p className="text-base" style={{ color: Ncolor }}>
              {note}
            </p>
          </div>

          <h4>Correct answer:</h4>
          <h2>{score}</h2>
        </div>

        <button
          className="min-w-max rounded-md bg-accent p-2.5 font-semibold text-white"
          onClick={() => {
            setShowQuizzContainer(false);
            setScore(0);
          }}
        >
          Finish
        </button>
      </div>
    )
  ) : null;
};

export default Quizzcontainer;
/*selectedAnswers.length !== 0*/
