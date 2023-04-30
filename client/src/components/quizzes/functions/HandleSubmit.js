export function handleSubmit(firstConent,questions, editMode,elementIndex) {
  console.log(questions) ; 
  let obj = new Object();
  obj.name = document.getElementById("title").value;
  obj.groupe = document.getElementById("groupe").value;
  obj.description = document.getElementById("description").value;
  obj.deadline = document.getElementById("deadline").value;
  
  const currentDate = new Date(); // get current date and time
  const day = currentDate.getDate().toString().padStart(2, "0"); // get day of the month and add leading zero if necessary
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // get month and add leading zero if necessary
  const year = currentDate.getFullYear().toString().slice(-2); // get year and convert to 2-digit format
  const hour =
    currentDate.getHours() > 12
      ? (currentDate.getHours() - 12).toString().padStart(2, "0")
      : currentDate.getHours().toString().padStart(2, "0"); // get hour in 12-hour format and add leading zero if necessary
  const minute = currentDate.getMinutes().toString().padStart(2, "0"); // get minute and add leading zero if necessary
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM"; // get AM/PM
  const formattedDate = `${day}/${month}/${year},${hour}:${minute}${ampm}`; // combine all parts into the desired format
  console.log(formattedDate); // output: e.g. 29/03/23,11:00PM

  obj.date = formattedDate;
  obj.quiz = questions ; 
  obj.submissions = [];
  if(editMode) {
    firstConent[0][elementIndex-1] = obj ; 
    console.log("save") ; 
  }else {
    firstConent[1]([...firstConent[0], obj]);
  }
  console.log(firstConent[0]);
}
