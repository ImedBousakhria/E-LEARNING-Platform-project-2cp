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

const AddNewSession = () => {
  const { register, handleSubmit, reset } = useForm();

  const { eventState, editMode, elementIndex } = useContext(scheduleContext);
  const [cancel, setCancel] = useState(false) ; 
  const {RenderTriger} = useContext(calendarContext) ; 

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new Session</h2>
      </div>
      <form
        onSubmit={handleSubmit((data) => {
          let obj = new Object();
          obj.groupe = data.groupe
            ? data.groupe
            : eventState[0][elementIndex[0]].groupe;
          obj.teacherName = data.teacherName
            ? data.teacherName
            : eventState[0][elementIndex[0]].teacherName;
          obj.color = data.color
            ? data.color
            : eventState[0][elementIndex[0]].color;
          obj.day = document.getElementById("daypicker").value;

          var indexindex;
          var secondIndex;
          let start = data.start
            ? data.start
            : eventState[0][elementIndex[0]].time.start;
          let end = data.end
            ? data.end
            : eventState[0][elementIndex[0]].time.end; ; 
          for (let ele of calendar) {
            if (ele == start) {
              indexindex = calendar.indexOf(ele);
            }
            if (ele == end) {
              secondIndex = calendar.indexOf(ele);
            }
          }
          console.log(secondIndex, indexindex);
          obj.span = secondIndex - indexindex + 1;
          obj.time = { start: start, end: end };
          obj.index = indexindex;
          obj.position = eventState[0].length;
          console.log(obj);
          if (!cancel) {
            if (editMode[0]) {
              eventState[0][elementIndex[0]] = obj;
              eventState[1](eventState[0]);
              RenderTriger[1](RenderTriger[0]++) ; 
            } else {
              eventState[1]([...eventState[0], obj]);
              deleteUselessTd(obj);
              RenderTriger[1](RenderTriger[0]++); 
            }
          }
          if (editMode[0]) {
            editMode[1](false);
          }
          console.log(eventState[0]) ; 
          reset();
        })}
        className="flex flex-col gap-2"
      >
        <div className="flex justify-between gap-[2%]">
          <div className=" flex basis-[49%] flex-col gap-4">
            <label htmlFor="groupe">
              <input
                name="groupe"
                placeholder="groupe"
                type="text"
                id="groupe"
                {...register("groupe")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].groupe
                    : null
                }
              />
            </label>
            <label htmlFor="teacher name">
              <input
                name="teacher name"
                id="teacher name"
                type="text"
                placeholder="teacher name"
                {...register("teacherName")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].teacherName
                    : null
                }
              />
            </label>
            <label htmlFor="pickColor">
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
          <div className="flex basis-[49%] gap-4">
            <div>
              <DayPicker />
            </div>
            <label htmlFor="starting time">
              <input
                className=""
                type="time"
                name="starting time"
                id="starting time"
                {...register("start")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].time.start
                    : null
                }
              />
            </label>
            <label htmlFor="ending time">
              <input
                type="time"
                name="ending time"
                id="ending time"
                placeholder="ending time"
                {...register("end")}
                defaultValue={
                  elementIndex[0] != null && editMode[0]
                    ? eventState[0][elementIndex[0]].time.end
                    : null
                }
              />
            </label>
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
