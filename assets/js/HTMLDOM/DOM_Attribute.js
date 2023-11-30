
let getHeader = document.querySelector("#HeadTitle");
console.log(getHeader);
console.log("");


console.log("Truy cập vào thuộc tính của element bằng cách trực tiếp: ");
let geta1 = document.querySelector("#a-1");
geta1.href = "google.com";
console.log(" geta1.href = \"google.com\"\; ");
console.log("");

console.log("Truy cập vào thuộc tính của element bằng cách gián tiếp thông qua phương thức setAtrribute:");
geta1.setAttribute("class","a1");
console.log("- geta1.setAttribute(\"class\",\"a1\")\;");
console.log("ghi chú: ƯU tiên sử dụng phương thức này");
console.log("");


console.log("Lấy ra thuộc tính của element thông qua phương thức getAttribute:");
var getA1Attribute = geta1.getAttribute("href");
console.log("- var getA1Attribute = geta1.getAttribute(\"href\")\;");
console.log(getA1Attribute);