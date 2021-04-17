function clickInsideElement(e, className) {
  var el = e.srsElement || e.target;
  if(el.classList.contains(className)) {
    return el;
  } else {
    while(el = el.parentNode) {
      if(el.classList && el.classList.contains(className)) {
        return el;
      }
    }
  }
  return false;
}
