import React, { useContext, useState } from "react";
import Publish from "../../components/reusable/Publish";
import { scheduleContext } from "../../content page/Schedule/Schedule";
import { calendar } from "../../content page/Schedule/content/main";
import { handleSubmit } from "./functions/HandleSubmit";
import DayPicker from "./DayPicker";
import Cancel from "../reusable/Cancel";
import { useForm } from "react-hook-form";
import { deleteUselessTd } from "./functions/DeleteUselessTd";
import { calendarContext } from "../../content page/Schedule/src/Main";
import { propsContext } from "../../content page/Mainapp";
import axios from "axios";

const AddNewSession = () => {
  const { courses } = useContext(propsContext);

  const { register, handleSubmit, reset } = useForm();

  async function postData(data) {
    console.log(data);
    try {
      const response = await axios.post(
        `http://localhost:3000/schedules/create`,
        data
      );
      console.log(response);
      /* const result = await response.json();
      console.log("Success:", result); */
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const { eventState, editMode, elementIndex } = useContext(scheduleContext);
  const [cancel, setCancel] = useState(false);
  const { RenderTriger } = useContext(calendarContext);

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new Session</h2>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          let obj = new Object();
          obj.course = data.selectCourse;
          obj.group = data.group
            ? data.group
            : eventState[0][elementIndex[0]].group;
          obj.color = data.color
            ? data.color
            : eventState[0][elementIndex[0]].color;
          obj.day = document.getElementById("daypicker").value;

          var indexindex;
          var secondIndex;
          let startTime = data.startTime
            ? data.startTime
            : eventState[0][elementIndex[0]].time.startTime;
          let endTime = data.endTime
            ? data.endTime
            : eventState[0][elementIndex[0]].time.endTime;
          for (let ele of calendar) {
            if (ele == startTime) {
              indexindex = calendar.indexOf(ele);
            }
            if (ele == endTime) {
              secondIndex = calendar.indexOf(ele);
            }
          }
          console.log(secondIndex, indexindex);
          obj.span = secondIndex - indexindex + 1;
          obj.startTime = startTime;
          obj.endTime = endTime;
          obj.index = indexindex;
          obj.position = eventState[0].length;
          console.log(obj);
          if (!cancel) {
            if (editMode[0]) {
              eventState[0][elementIndex[0]] = obj;
              eventState[1](eventState[0]);
              RenderTriger[1](RenderTriger[0]++);
            } else {
              eventState[1]([...eventState[0], obj]);
              deleteUselessTd(obj);
              RenderTriger[1](RenderTriger[0]++);
            }
          }
          if (editMode[0]) {
            editMode[1](false);
          }
          console.log(eventState[0]);
          postData(obj);
          reset();
        })}
        className="flex flex-col gap-2"
      >
        <div className="flex justify-between gap-[2%]">
          <div className=" flex basis-[49%] flex-col gap-4">
            <label htmlFor="group">
              <input
                name="group"
                placeholder="group"
                type="text"
                id="group"
                {...register("group")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].group
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
                  <option value={element.courseID._id}>
                    {element.courseID.title}
                  </option>
                );
              })}
            </select>
            <label className="w-fit" htmlFor="pickColor">
              <input
                type="color"
                placeholder="pick color"
                id="pickColor"
                name="pickColor"
                {...register("color")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].color
                    : null
                }
              />
            </label>
          </div>
          <div className="flex basis-[49%] flex-col gap-4">
            <div className="flex w-full gap-4">
              <div>
                <DayPicker />
              </div>
              <label htmlFor="startTime">
                <input
                  className=""
                  type="time"
                  name="startTime"
                  id="startTime"
                  {...register("startTime")}
                  defaultValue={
                    elementIndex[0] != null && editMode[0]
                      ? eventState[0][elementIndex[0]].time.startTime
                      : null
                  }
                />
              </label>
              <label htmlFor="endTime">
                <input
                  type="time"
                  name="endTime"
                  id="endTime"
                  placeholder="endTime"
                  {...register("endTime")}
                  defaultValue={
                    elementIndex[0] != null && editMode[0]
                      ? eventState[0][elementIndex[0]].time.endTime
                      : null
                  }
                />
              </label>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          {editMode[0] ? <Cancel onClick={() => setCancel(true)} /> : null}
          <Publish />
        </div>
      </form>
    </div>
  );
};

export default AddNewSession;
