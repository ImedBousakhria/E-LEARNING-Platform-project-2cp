import axios from "axios";
export const fetchUser = async ({ queryKey }) => {
  const id = queryKey[1] ; 
  try {
    /* return axios.get(
      "http://localhost:3000/user/get/644164aa82161f42040c7c4b"
    ).then(res =>res.data) */
    /* const res = await axios.get(
      "http://localhost:3000/user/get/644164aa82161f42040c7c4b"
    );
    console.log(res) ; 
    data = await res.data 
    return data ; */ 
    const res = await fetch(
    `http://localhost:3000/user/get/${id}`
    );
    const data = await res.json() ; 
    console.log(data.firstName) ; 
    return data ; 
  } catch (e) {
    console.log(e);
  }
};


export const fetchCours = ({queryKey}) => {
  console.log(queryKey) ; 
  let id = queryKey[1].courseID ; 
  try {
    return axios.get(
      `http://localhost:3000/course/get/${id}`
    ).then(res => res.data) 
  }catch(e) {
    console.log(e) ; 
  }
} 

export const fetchQuizzes = ({queryKey}) => {
  let id = queryKey[1] 
  try {
    return axios.get(
      `http://localhost:3000/quizz/get/${id}`
    ).then(res => res.data);
  }catch(e) {
    console.log(e) ; 
  }
}