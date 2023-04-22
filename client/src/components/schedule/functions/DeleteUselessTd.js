export function deleteUselessTd(obj, indexindex) {
  for(let i = 1 ; i<obj.span+1; i++) {
    console.log( document.getElementById(obj.day+(indexindex+i))); 
    document.getElementById(obj.day + (indexindex + i)).remove();
  }

}