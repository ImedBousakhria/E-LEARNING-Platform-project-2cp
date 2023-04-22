import kid from "../../assets/programms/kid.png";
import master from "../../assets/programms/master.png";
import student from "../../assets/programms/student.png";
import uk from "../../assets/programms/uk.png";

let purple = "hsla(229, 100%, 66%, 1)"; 
let blue = "hsla(197, 100%, 61%, 1)" ; 

export const programs = [
  {
    name: "General program",
    icon: uk,
    type: 1,
    // bg , accent
    colors: [purple, blue],
    // days/week , weeks
    time: [2, 8],
    path: 'M36.1909 6.66564C47.4065 -1.48297 62.5935 -1.48298 73.8091 6.66563L107.52 31.1581C118.736 39.3067 123.429 53.7505 119.145 66.9352L106.268 106.565C101.984 119.75 89.6978 128.676 75.8345 128.676H34.1655C20.3022 128.676 8.01564 119.75 3.73166 106.565L-9.14478 66.9352C-13.4288 53.7505 -8.73571 39.3067 2.47989 31.1581L36.1909 6.66564Z'
  },
  {
    name: "Intensive program",
    icon: student,
    type: 2,
    colors: [blue, purple],
    time: [2, 8],
  },
  {
    name: "Kids program",
    icon: kid,
    type: 3,
    colors: [purple, blue],
    time: [2, 8],
  },
  {
    name: "IELTS PREPARATION",
    icon: master,
    type: 4,
    colors: [blue, purple],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 1,
    colors: [purple, blue],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 2,
    colors: [blue, purple],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 3,
    colors: [purple, blue],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 4,
    colors: [blue, purple],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 1,
    colors: [purple, blue],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 2,
    colors: [blue, purple],
    time: [2, 8],
  },
  {
    name: "General program",
    icon: uk,
    type: 3,
    colors: [purple, blue],
    time: [2, 8],
  },
];


