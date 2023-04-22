import { calendar } from "../../../content page/Schedule/content/main";
import { deleteUselessTd } from "./DeleteUselessTd";

export const handleSubmit = (e, eventState) => {
  e.preventDefault();
  let obj = new Object();
  obj.groupe = document.getElementById("groupe").value;
  obj.teacherName = document.getElementById("teacher name").value;
  obj.color = document.getElementById("pickColor").value;
  let start = document.getElementById("starting time").value;
  let end = document.getElementById("ending time").value;
  obj.day = document.getElementById("daypicker").value;
  var indexindex;
  var secondIndex;
  for (let ele of calendar) {
    if (ele == start) {
      indexindex = calendar.indexOf(ele);
    }
    if (ele == end) {
      secondIndex = calendar.indexOf(ele);
    }
  }
  console.log(secondIndex, indexindex);
  obj.span = secondIndex - indexindex;

  obj.index = indexindex;
  console.log(obj);
  eventState[1]([...eventState[0], obj]);
  console.log(eventState[0]);
    deleteUselessTd(obj, indexindex, secondIndex);
  
};
