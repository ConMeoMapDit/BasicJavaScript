console.log("Sử dụng getElementById: ");
let getHeader = document.getElementById("HeadTitle");
console.log(document.getElementById("HeadTitle"));
console.log("");

console.log("Sử dụng getElementsByClassName: ");
let getTs2 = document.getElementsByClassName("ts-2");
console.log(getTs2);
console.log("");

// Truy cập class li thông qua box-1
console.log("Lấy class box-1 thông qua querySelector:");
var getBox1 = document.querySelector(".box-1");
console.log(getBox1);
console.log("");

console.log("Lấy ts-li-class của box-1 thông qua querySelectorAll:");
let getTestLiClass = getBox1.querySelectorAll('.ts-li-class');
console.log(getTestLiClass);
console.log("");

console.log("Sử dụng getElementsByTagName: ");
let getAllTagLi = document.getElementsByTagName("li");
console.log(getAllTagLi);