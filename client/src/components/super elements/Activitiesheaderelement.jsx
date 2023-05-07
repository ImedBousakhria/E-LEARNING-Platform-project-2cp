import React, { useContext, useState } from "react";
import drop from "../../assets/icons/drop.svg";
import { IndexElementContextquiz } from "../../content page/Quizzes/Quizzes";
import { IndexElementContext } from "../../content page/Assignment/Assignment";
import { homeContext } from "../../content page/Home/Home";

const Activitiesheaderelement = ({ title, type }) => {
  console.log(type);
  const [rotate, setRotate] = useState(false);
  var activitiesContext;
  if (type == "quiz") {
    activitiesContext = IndexElementContextquiz;
  } else if (type == "assignment") {
    activitiesContext = IndexElementContext;
  } else if (type == "students") {
    activitiesContext = homeContext;
  }
  //const { firstContent } = useContext(activitiesContext);
  /* const handleSorting = () => {
    if(rotate) {
      if (title == "Date modified") {
      firstContent[1](
        firstContent[0].sort(
          (a, b) =>
            new Date(
              b.date.replace(",", " ").replace("PM", "PM").replace("AM", "AM")
            ) -
            new Date(
              a.date.replace(",", " ").replace("PM", "PM").replace("AM", "AM")
            )
        )
      );
    } else if (title == "Name") {
      firstContent[1](
        firstContent[0].sort((a, b) => {
          if (a.name[0] > b.name) {
            return 1;
          }
          if (a.name[0] < b.name) {
            return -1;
          }
          return 0;
        })
      );
    } else if (title == "Group") {
      firstContent[1](
        firstContent[0].sort((a, b) => {
          if (a.groupe[0] > b.groupe) {
            return 1;
          }
          if (a.groupe[0] < b.groupe) {
            return -1;
          }
          return 0;
        })
      );
    }
    }
    
  }; */
  //console.log(firstContent);
  return (
    <div
      onClick={(e) => {
        rotate ? setRotate(false) : setRotate(true);
        handleSorting(e);
      }}
      className="grid-span-1 flex items-center gap-2 "
    >
      <img className={` rotate-${rotate ? "180" : "0"}`} src={drop} />

      {title}
    </div>
  );
};

export default Activitiesheaderelement;
