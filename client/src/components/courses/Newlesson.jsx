import React from "react";
import Publish from "../reusable/Publish";
import Attachfile from "../reusable/Attachfile";
import { useRef, useState } from "react";
import Uploadedfile from "../reusable/Uploadedfile";
import { useContext } from "react";
import { CoursesContext } from "../../content page/Courses/Teachercourses";
import Save from "../reusable/Save";
import Cancel from "../reusable/Cancel";
import publish from "../../assets/icons/publish.svg";
import axios from "axios";
import { propsContext } from "../../content page/Mainapp";

const Newlesson = () => {
  const { lessons, setLessons, courses, setCourses } =
    useContext(CoursesContext);
  const { data } = useContext(propsContext);
  // post lesson
  const addLesson = async (testCourse) => {
    axios
      .post("http://localhost:3000/lesson/create", testCourse)
      .then((response) => {
        setLessons([testCourse, ...lessons]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCreation = async () => {
    const toAdd = {
      title: Acontent.title,
      description: Acontent.description,
      gallery: files,
    };

    const newLesson = await addLesson(toAdd);
    console.log(newLesson);
  };

  // post Course
  const addCourse = async (testCourse) => {
    axios
      .post("http://localhost:3000/course/create", testCourse)
      .then((response) => {
        setCourses([testCourse, ...courses]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCourseCreation = async () => {
    const toAdd = {
      title: Acontent.title,
    };
    try {
      const newCourse = await addCourse(toAdd);
      console.log(newCourse);
    } catch (error) {
      console.log(error);
    }
  };

  const addStudentToCourse = async (fullName) => {
    const [firstName, lastName] = fullName.split(" ");

    try {
      const student = await axios.get(
        `http://localhost:3000/user/getStudents?firstName=${firstName}&lastName=${lastName}`
      );
      const course = await axios.get(
        `http://localhost:3000/course/get/644d87aefea6c9ca5de10703`
      );
      const updatedCourse = {
        ...course,
        students: [student.data._id],
      };
      await axios.put(
        `http://localhost:3000/course/update/644d87aefea6c9ca5de10703`,
        updatedCourse
      );
      /* setCourses(updatedCourse); */
    } catch (error) {
      console.log(error);
    }
  };

  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [newTeacher, setNewTeacher] = useState("");

  const handleAddStudent = () => {
    console.log(students);
    setStudents([...students, newStudent]);
  };

  const handleAddTeacher = () => {
    console.log(teachers);
    setTeachers([...teachers, newTeacher]);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddStudent();
      handleAddTeacher();
    }
  };

  // writing course id : 64415e0c5290472b31ac4d0c

  const { editMode, setEditMode, Acontent, setContent, type, setType } =
    useContext(CoursesContext);

  const newItem = {
    //person: "said",
    content: Acontent.description,
  };

  const toggleType = () => {
    if (type === "course") setType("lesson");
    else if (type === "lesson") setType("course");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(Acontent);
    setContent((prevContent) => ({ ...prevContent, [name]: value }));
  };

  const handleFileUpload = () => {
    inputRef.current.click();
  };

  const handleFileSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div
      className={` ${
        editMode ? " shadow-2xl" : " shadow-md"
      } mb-7 rounded-[10px] bg-white px-8 py-6`}
    >
      <div className="flex justify-between">
        <p
          className={`${
            type === "course" ? "text-nightblue" : "text-gray"
          }  mb-3 cursor-pointer text-lg font-semibold`}
          onClick={toggleType}
        >
          {editMode ? `Edit course` : `Add a new course`}
        </p>
        <p
          className={`${
            type === "lesson" ? "text-nightblue" : "text-gray"
          } mb-3 cursor-pointer text-lg font-semibold`}
          onClick={toggleType}
        >
          {editMode ? `Edit lesson` : `Add a new lesson`}
        </p>
      </div>

      {
        // crud LESSON
        type === "lesson" && (
          <div className="  flex justify-between">
            <div className="flex w-[45%] flex-col gap-6 ">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
              />
              <textarea
                value={Acontent.description}
                type="text"
                name="description"
                placeholder="Description"
                onChange={handleChange}
                className=" resize-none rounded-[10px] border border-darkgray px-3 pb-24 pt-3.5 outline-none"
              />
            </div>

            <div className="flex w-[45%] flex-col justify-between">
              <div className="flex basis-[80%] ">
                <div className="flex">
                  {files.map((file) => (
                    <Uploadedfile fileName={file.name} file={file} />
                  ))}
                </div>
                <input
                  type="file"
                  accept=".pdf, image/*"
                  multiple="true"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleFileSelected}
                />
              </div>
              <div className="flex gap-4 place-self-end">
                {
                  editMode ? (
                    <Cancel text={Cancel} onClick={() => setEditMode(false)} />
                  ) : null
                  // no change on the content, Restore old data
                }
                <Attachfile onClick={handleFileUpload} />
                {!editMode ? (
                  <Publish
                    onClick={() => {
                      handleCreation(), console.log(files);
                    }}
                  />
                ) : (
                  <Save onClick={() => setEditMode(false)} /> // set the content to the edited one;
                )}
              </div>
            </div>
          </div>
        )
      }
      {
        // crud COURSE
        type === "course" && (
          <div className="flex justify-between">
            <div className="flex w-[45%] flex-col gap-4">
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
                className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
              />
              <input
                type="text"
                name="teachers"
                placeholder="Add teachers"
                onChange={
                  handleChange /* (event) => setNewTeacher(event.target.value) */
                }
                className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
              />
            </div>
            <div className="flex w-[45%] flex-col justify-between">
              <input
                type="text"
                name="students"
                placeholder="Add students"
                onChange={
                  handleChange /* (event) => setNewStudent(event.target.value) */
                }
                onKeyDown={handleKeyDown}
                className=" rounded-[10px] border border-darkgray px-3 py-3.5 outline-none"
              />

              <div className="place-self-end">
                {
                  editMode ? (
                    <button
                      className="flex flex-shrink-0 w-max items-center gap-2 place-self-end rounded-md bg-accent p-2 "
                      type="submit"
                      onClick={() => {addStudentToCourse(Acontent.students)}}
                    >
                      <p className=" text-sm font-semibold text-white min-w-max">Save Edit</p>
                      <img src={publish} alt="" />
                    </button>
                  ) : (
                    <button
                      className="flex w-max items-center gap-2 place-self-end rounded-md bg-accent p-2 "
                      type="submit"
                      onClick={handleCourseCreation}
                    >
                      <p className=" text-sm font-semibold text-white">Done</p>
                      <img src={publish} alt="" />
                    </button>
                  )
                  // no change on the content, Restore old data
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};
export default Newlesson;
