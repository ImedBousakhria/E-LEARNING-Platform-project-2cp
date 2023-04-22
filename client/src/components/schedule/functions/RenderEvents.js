export function renderEvents(eventState) {    
  console.log(eventState) ; 
    eventState.map((element,index) => {
      let content = `${element.groupe} ${element.teacherName}` ; 
      let container = document.getElementById(element.day+element.index) ; 
      container.textContent = content || " "  ; 
      container.rowSpan = element.span +1 ; 
      container.style.backgroundColor = element.color ; 
      console.log(document.getElementById(element.day+element.index)) ; 
    })
  }