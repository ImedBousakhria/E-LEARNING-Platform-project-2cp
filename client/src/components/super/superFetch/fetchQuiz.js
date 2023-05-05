import axios from "axios"

export const fetchCours= () => {
  try {
    const response = axios.get("http://localhost:3000/course/get/644150134334ed77cecc938e")
    return response.data ; 
  }catch(e) {
    console.log(e) ; 
  }
}