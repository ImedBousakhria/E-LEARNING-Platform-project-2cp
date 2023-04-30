import React, { useContext } from 'react'
import Profile from '../reusable/Profile';
import Message from '../reusable/Message';
import { homeContext } from '../../content page/Home/Home';

const Announcementelement = ({ profilepicture, person, content, image, index }) => {
  const {showDiscussion, elementIndex } = useContext(homeContext) ; 
  function handleClick() {
    if(showDiscussion[0] == "hidden") {
      showDiscussion[1]("block")
    }else {
      showDiscussion[1]("hidden") ; 
    }
  }
  return (
    <div onClick={()=>{elementIndex[1](index+1)}} className="flex   flex-col  gap-2 rounded-[10px] bg-assignmentbg p-2 text-darkgray">
      <div className='flex justify-between'>
        <Profile profilepicture={profilepicture} person={person} />
        <Message handleClick={()=> {  handleClick()}} />
      </div>
      <div className="flex w-full items-end">
        <div style={{ flexBasis: image ? "70%" : "100%" }}>
          <p>{content}</p>
        </div>
        <div style={{ flexBasis: image ? "30%" : "0%" }}>
          {image ? <img className="w-full object-cover" src={image} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Announcementelement;
