document.body.onkeyup = function(event) {
  console.log(event.keyCode);
  if (event.keyCode == 68) {
    //change to dark mode
    document.body.classList.toggle("dark");
  }
}