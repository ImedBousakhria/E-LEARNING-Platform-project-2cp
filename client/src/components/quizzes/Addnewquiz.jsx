import React, { createContext, useContext, useState } from "react";
import add from "../../assets/icons/add.svg";
import Answerstate from "./components/Answerstate";
import Questions from "./Questions";
import Publish from "../reusable/Publish";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import Save from "../reusable/Save";
import Cancel from "../reusable/Cancel";
import { useForm } from "react-hook-form";
import { getCurrentTime } from "../reusableFunc/getTime.js"; 
import { propsContext } from "../../content page/Mainapp";
import axios from "axios";

export const handleQuesitons = createContext();

const Addnewquiz = () => {

  const {courses} = useContext(propsContext) ; 

  const { register, handleSubmit, reset } = useForm();

  const { elementIndex, editMode, dataElements } = useContext(
    IndexElementContextquiz
  );

  const [questions, setQuestions] = useState([]);
  const [cancel, setCancel] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);


  async function postData(data) {
    console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:3000/quizz/create`,
        data
      );
      console.log(response);
      /* const result = await response.json();
      console.log("Success:", result); */
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function updateData(data, id) {
    console.log(data, id);

    try {
      const response = await axios.put(
        `http://localhost:3000/quizz/update/${id}`,
        data
      );
      console.log(response);
      /* const result = await response.json();
      console.log("Success:", result); */
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <handleQuesitons.Provider value={{ questions, setQuestions }}>
      <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
        <div>
          <h2 className="text-[1.25rem]">Add new quiz</h2>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            let obj = new Object();
            obj.content = questions;
            obj.course = data.selectCourse;
            obj.name = data.name
              ? data.name
              : dataElements[elementIndex[0] - 1].name;

            /* obj.groupe = data.groupe
              ? data.groupe
              : firstContent[0][elementIndex[0] - 1].groupe; */
            //console.log(getCurrentTime());
            //obj.date = getCurrentTime();
            obj.deadline = data.deadline
              ? data.deadline
              : dataElements[elementIndex[0] - 1].deadline;
            obj.description = data.description
              ? data.description
              : dataElements[elementIndex[0] - 1].description;

            /* obj.submissions = firstContent[0][elementIndex[0] - 1]?.submissions
              ? firstContent[0][elementIndex[0] - 1].submissions
              : []; */

            console.log(obj);
            if (!cancel) {
              if (editMode[0]) {
                let id = dataElements[elementIndex[0] - 1]._id;
                updateData(obj, id);

                //firstContent[0][elementIndex[0] - 1] = obj;
                console.log("ssave");
              } else {
                postData(obj);
                //firstContent[1]([...firstContent[0], obj]);
              }
            }
            if (editMode[0]) {
              editMode[1](false);
            }
            /*             document.querySelectorAll(".questionState").forEach((Element) => {
              Element.value = null ; 
            }); */
            setQuestions([]);
            reset();
          })}
          className="flex gap-[2%]"
        >
          <div className="flex basis-[49%] flex-col gap-4">
            <label htmlFor="name">
              <input
                type="text"
                placeholder="name"
                id="name"
                {...register("name")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? dataElements[elementIndex[0] - 1].name
                    : null
                }
              />
            </label>
            {/* <label htmlFor="groupe">
              <input
                type="text"
                placeholder="groupe"
                id="groupe"
                {...register("groupe")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? firstContent[0][elementIndex[0] - 1].groupe
                    : null
                }
              />
            </label> */}
            <label htmlFor="description">
              <textarea
                placeholder="Description"
                id="description"
                {...register("description")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? dataElements[elementIndex[0] - 1].description
                    : null
                }
              />
            </label>
            <label htmlFor="Deadline(Date and time input)">
              <input
                type="date"
                placeholder="Deadline(Date and time input)"
                id="deadline"
                {...register("deadline")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? dataElements[elementIndex[0] - 1].deadline
                    : null
                }
              />
            </label>
            <select id="selectCourse" {...register("selectCourse")}>
              <option disabled selected>
                Choose a Course
              </option>
              {courses.map((element) => {
                return (
                  <option value={element._id}>
                    {element.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex basis-[49%] flex-col gap-4">
            <div>
              <div className=" grid grid-cols-2 grid-rows-3 rounded-[10px]  pt-2 outline outline-1 outline-gray">
                <div className=" col-start-1  col-end-3 row-start-1 row-end-2">
                  <label htmlFor="question">
                    <input
                      className=" rounded-[0] border-x-[0] border-t-0 "
                      type="text"
                      id="question"
                      name="question"
                      placeholder="Question"
                      {...register("question")}
                      defaultValue={
                        elementIndex[0] != null && editMode[0]
                          ? dataElements[elementIndex[0] - 1].content[
                              questionIndex
                            ].question
                          : null
                      }
                    />
                  </label>
                </div>
                <div className="col-start-1 col-end-2 row-start-2 row-end-3 flex justify-between border border-l-0 border-t-0 border-gray px-1">
                  <label htmlFor="choiceone">
                    <input
                      type="text"
                      className="border-none"
                      name="choiceone"
                      id="choiceone"
                      placeholder="choice1"
                      {...register("choiceone")}
                      defaultValue={
                        elementIndex[0] != null && editMode[0]
                          ? dataElements[elementIndex[0] - 1].content[
                              questionIndex
                            ].options[0].text
                          : null
                      }
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex justify-between border border-x-0 border-t-0 border-gray px-1">
                  <label htmlFor="choicetwo">
                    <input
                      className="border-none"
                      type="text"
                      name="choicetwo"
                      id="choicetwo"
                      placeholder="choice2"
                      {...register("choicetwo")}
                      defaultValue={
                        elementIndex[0] != null && editMode[0]
                          ? dataElements[elementIndex[0] - 1].content[
                              questionIndex
                            ].options[1].text
                          : null
                      }
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-1 col-end-2 row-start-3 row-end-4 flex justify-between border border-y-0 border-l-0 border-gray px-1">
                  <label htmlFor="choicethree">
                    <input
                      className="border-none"
                      type="text"
                      name="choicethree"
                      id="choicethree"
                      placeholder="choice3"
                      {...register("choicethree")}
                      defaultValue={
                        elementIndex[0] != null && editMode[0]
                          ? dataElements[elementIndex[0] - 1].content[
                              questionIndex
                            ].options[2].text
                          : null
                      }
                    />
                  </label>
                  <Answerstate />
                </div>
                <div className="col-start-2 col-end-3 row-start-3 row-end-4 flex justify-between px-1">
                  <label htmlFor="choicefour">
                    <input
                      type="text"
                      className="border-none"
                      name="choicefour"
                      id="choicefour"
                      placeholder="choice4"
                      {...register("choicefour")}
                      defaultValue={
                        elementIndex[0] != null && editMode[0]
                          ? dataElements[elementIndex[0] - 1].content[
                              questionIndex
                            ].options[3].text
                          : null
                      }
                    />
                  </label>
                  <Answerstate />
                </div>
              </div>
            </div>
            <Questions
              questionIndex={questionIndex}
              setQuestionIndex={setQuestionIndex}
            />
            <div className="flex justify-end gap-2 text-white">
              {editMode[0] ? (
                <div
                  onClick={() => {
                    setCancel(true);
                  }}
                >
                  <Cancel />
                </div>
              ) : null}
              <button
                onClick={handleSubmit((data) => {
                  console.log(data);
                  let obj = new Object();
                  //let optionsArray = new Object() ;
                  obj.question = data.question;
                  obj.options = [
                    {
                      text: data.choiceone,
                      state:
                        document.querySelectorAll(".questionState")[0].value ==
                        "true"
                          ? true
                          : false,
                    },
                    {
                      text: data.choicetwo,
                      state:
                        document.querySelectorAll(".questionState")[1].value ==
                        "true"
                          ? true
                          : false,
                    },
                    {
                      text: data.choicethree,
                      state:
                        document.querySelectorAll(".questionState")[2].value ==
                        "true"
                          ? true
                          : false,
                    },
                    {
                      text: data.choicefour,
                      state:
                        document.querySelectorAll(".questionState")[3].value ==
                        "true"
                          ? true
                          : false,
                    },
                  ];

                  /* obj.answaer1 = [
                    data.choiceone,
                    document.querySelectorAll(".questionState")[0].value,
                  ];
                  obj.answaer2 = [
                    data.choicetwo,
                    document.querySelectorAll(".questionState")[1].value,
                  ];
                  obj.answaer3 = [
                    data.choicethree,
                    document.querySelectorAll(".questionState")[2].value,
                  ];
                  obj.answaer4 = [
                    data.choicefour,
                    document.querySelectorAll(".questionState")[3].value,
                  ]; */
                  setQuestions([...questions, obj]);
                  console.log(questions);
                  reset({
                    question: "",
                    choiceone: "",
                    choicetwo: "",
                    choicethree: "",
                    choicefour: "",
                  });
                })}
                className="flex items-center gap-2 rounded-[5px] bg-blue p-2"
              >
                Add <img src={add} />
              </button>
              {editMode[0] ? <Save /> : <Publish />}
            </div>
          </div>
        </form>
      </div>
    </handleQuesitons.Provider>
  );
};

export default Addnewquiz;
