import React, { useContext } from "react";
import Deleteactivitieselemnt from "./Deleteactivitieselemnt";
import Cancel from "./Cancel";
import Delete from "./Delete";
import delet from "../../assets/icons/delete.svg";
import close from "../../assets/icons/close.svg";
import { scheduleContext } from "../../content page/Schedule/Schedule";
import axios from "axios";
import { IndexElementContext } from "../../content page/Assignment/Assignment";

const ConfirmDelete = ({ confirmDelete, setConfirmDelete, type }) => {
  let confirmDeleteContext ; 
  if(type == "schedule") {
    confirmDeleteContext = scheduleContext ; 
  }else if(type == "assignment")  {
    confirmDeleteContext = IndexElementContext ;
  }
  //const { handleDelete } = useContext(confirmDeleteContext);

  //const { dataElements, elementIndex } = useContext(scheduleContext);
  async function deleteData(id) {
    try {
      const response = await axios.delete(
        `http://localhost:3000/schedules/delete/${id}`
      );
      console.log(response);
      /* const result = await response.json();
      console.log("Success:", result); */
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div
      className={`absolute ${confirmDelete} -left-[100%] top-[110%] z-10 flex flex-col gap-2 rounded-[2px] bg-white p-1 `}
    >
      <p className="whitespace-nowrap text-black">Are you sure?</p>
      <div className="flex justify-center gap-2">
        <button
          type="submit"
          onClick={() => {
            deleteData(dataElements[elementIndex[0]]._id);
            location.reload() ; 
          }}
          className="flex w-auto min-w-max cursor-pointer items-center gap-2 rounded-[5px] border border-red p-1"
        >
          <img src={delet} />
        </button>
        <div
          onClick={() => {
            setConfirmDelete("hidden");
          }}
        >
          <img src={close} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmDelete;
