//Class List Property


//add()
//contains()
//remove()
//toggle()

//Length
let ObjCllength = document.getElementById("class-list-length");
let numOfClassList = document.getElementById("class-list-length").innerText;

numOfClassList = numOfClassList + " " + ObjCllength.classList.length;
document.getElementById("class-list-length").innerText = numOfClassList;

//Rút gọn code
// document.getElementById("class-list-length").innerText = document.getElementById("class-list-length").innerText + " " + document.getElementById("class-list-length").classList.length;
console.log("");


//value
document.getElementById("class-list-value").innerText = document.getElementById("class-list-value").innerText + " " + document.getElementById("class-list-value").classList.value;
console.log("");


//add()
var addRed = document.querySelector("#class-list-add");
addRed.classList.add("red");
// document.getElementById("class-list-add").classList.add("red");
console.log("");


//contains()
document.getElementById("class-list-contains").classList.add("red");
console.log("Check contains: ");
console.log(document.getElementById("class-list-contains").classList.contains("red"));
console.log("");


//remove()
document.getElementById("class-list-remove").classList.remove("red");
console.log("");


//toggle()
setInterval(() => {
    document.getElementById("class-list-toggle").classList.toggle("red");
    if (document.getElementById("class-list-toggle").classList.contains("red")) {
        document.getElementById("class-list-toggle").innerText = "Thẻ span này đã thêm class red";
    } else {
        document.getElementById("class-list-toggle").innerText = "Thẻ span này chưa có class red";
    }
}, 1500);