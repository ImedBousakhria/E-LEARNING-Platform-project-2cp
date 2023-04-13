import React from 'react'

const Sectionside = ({name, icon, setIndex, elementindex, iconwhite, id}) => {
  console.log(elementindex, id) ; 
  return (
    <button
      onClick={setIndex}
      className="flex items-center gap-2  rounded-[10px]  border-darkgray p-2  "
      style={{
        backgroundColor:
          elementindex === id
            ? "hsla(229, 100%, 66%, 1)"
            : "hsla(0, 0%, 72%, 0)",
        color: elementindex === id ? "white" : "hsla(0, 0%, 72%, 1)",
        borderWidth:elementindex===id?"none":"1px"
      }}
      
    >
      <img src={id === elementindex ? iconwhite : icon} />
      <p>{name}</p>
    </button>
  );
}

export default Sectionside