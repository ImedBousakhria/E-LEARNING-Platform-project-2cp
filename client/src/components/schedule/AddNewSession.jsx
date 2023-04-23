import React, { useContext, useState } from "react";
import Publish from "../../components/reusable/Publish";
import { scheduleContext } from "../../content page/Schedule/Schedule";
import { calendar } from "../../content page/Schedule/content/main";
import { handleSubmit } from "./functions/HandleSubmit";
import DayPicker from "./DayPicker";
import Cancel from "../reusable/Cancel";

const AddNewSession = () => {
  const { eventState, editMode, elementIndex } = useContext(scheduleContext);
  const [groupe, setGroupe] = useState(false);
  const [teacherName, setTeacherName] = useState(false);
  const [color, setColor] = useState(false);
  const [day, setDay] = useState(false);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  return (
    <div className="flex flex-col gap-4 rounded-[10px] bg-white p-4">
      <div>
        <h2 className="text-[1.25rem]">Add new Session</h2>
      </div>
      <form
        onSubmit={(e) => {
          handleSubmit(e, eventState);
          setGroupe(null);
          setColor(null);
          setTeacherName(null);
          setEnd(null);
          setStart(null);
        }}
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
                value={
                  elementIndex[0] != null && editMode[0]
                    ? groupe || eventState[0][elementIndex[0] ].groupe
                    : groupe || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (eventState[0][elementIndex[0] ].groupe = "")
                    : null;
                  setGroupe(e.target.value);
                }}
              />
            </label>
            <label htmlFor="teacher name">
              <input
                name="teacher name"
                id="teacher name"
                type="text"
                placeholder="teacher name"
                value={
                  elementIndex[0] != null && editMode[0]
                    ? teacherName ||
                      eventState[0][elementIndex[0] ].teacherName
                    : teacherName || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (eventState[0][elementIndex[0] ].teacherName = "")
                    : null;
                  setTeacherName(e.target.value);
                }}
              />
            </label>
            <label htmlFor="pickColor">
              <input
                type="color"
                placeholder="pick color"
                id="pickColor"
                name="pickColor"
                value={
                  elementIndex[0] != null && editMode[0]
                    ? color || eventState[0][elementIndex[0] ].color
                    : color || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (eventState[0][elementIndex[0] ].color = "")
                    : null;
                  setColor(e.target.value);
                }}
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
                value={
                  elementIndex[0] != null && editMode[0]
                    ? start || eventState[0][elementIndex[0] ].time.start
                    : start || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (eventState[0][elementIndex[0] ].time.start = "")
                    : null;
                  setStart(e.target.value);
                }}
              />
            </label>
            <label htmlFor="ending time">
              <input
                type="time"
                name="ending time"
                id="ending time"
                placeholder="ending time"
                value={
                  elementIndex[0] != null && editMode[0]
                    ? end || eventState[0][elementIndex[0] ].time.end
                    : end || ""
                }
                onChange={(e) => {
                  elementIndex[0] != null && editMode[0]
                    ? (eventState[0][elementIndex[0] ].time.end = "")
                    : null;
                  setEnd(e.target.value);
                }}
              />
            </label>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          {
            editMode[0]?(<Cancel setEditMode={editMode[1]} />) : null
          }
          <Publish />
        </div>
      </form>
    </div>
  );
};

export default AddNewSession;
