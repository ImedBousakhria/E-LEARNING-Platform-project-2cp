import { deleteUselessTd } from "./DeleteUselessTd";

var i = 0;
export function renderEvents(eventState) {
  eventState.map((element, index) => {
    let content = `${element.groupe} ${element.teacherName}`;
    let container = document.getElementById(element.day + element.index);
    container.children[0].textContent = content || " ";
    container.rowSpan = element.span ;
    container.style.backgroundColor = element.color;
    container.key = element.position ; 
    deleteUselessTd(element);
    console.log(++i, "rerender") ; 
  });
}
