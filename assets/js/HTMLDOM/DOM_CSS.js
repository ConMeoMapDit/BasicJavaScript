var boxElement = document.querySelector(".box");
console.log(boxElement);

boxElement.style.width = "100px";
boxElement.style.height = "100px";
boxElement.style.backgroundColor = "red";

Object.assign(boxElement.style, {
    width: "200px",
    height: "100px",
    backgroundColor: "green",
});