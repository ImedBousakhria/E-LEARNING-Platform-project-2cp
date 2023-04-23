import React, { useContext } from "react";
import add from "../../assets/icons/add.svg";
import { propsContext} from '../../content page/Mainapp'

const Add = ({text, bg, index}) => {
  const {Indexhandle} = useContext(propsContext) ; 
  return (
    <button
      onClick={() => Indexhandle[1](index+1)}
      style={{ backgroundColor: bg }}
      className="flex min-w-[20%] font-semibold  items-center gap-1 rounded-[10px] px-[12px] py-[15px] text-white"
    >
      <span>{text}</span>
      <img src={add} />
    </button>
  );
};

export default Add;
