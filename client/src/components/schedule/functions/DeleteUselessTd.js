export function deleteUselessTd(obj) {
  for(let i = 1 ; i<obj.span; i++) {
    document.getElementById(obj.day + (obj.index + i))?.remove();
  }

}