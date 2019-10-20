var el = document.querySelector(".el");

var height = el.scrollHeight;

console.log(height);

el.style.setProperty("--max-height", height + "px");
