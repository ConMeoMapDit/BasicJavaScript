//Class List Property


//add()
//contains()
//remove()
//toggle()

var boxClassList = document.querySelector(".learn-class-list");
console.log(boxClassList);

console.log(boxClassList.classList);
console.log("");


//Length
let ObjCllength = document.getElementById("class-list-length");
let cll = document.getElementById("class-list-length").innerText;

cll = cll + " " + ObjCllength.classList.length;
document.getElementById("class-list-length").innerText = cll
//value
console.log("Sử dụng classList.value để biết tên các class trong element:");
console.log(boxClassList.classList.value);
console.log("- Lưu ý: classList.value trả về một chuỗi: ");
console.log(typeof boxClassList.classList.value);
console.log("");


//add()
console.log("Object.classList.add() => Thêm một class vào element:");
console.log("Sử dụng classList.add(\"red\") để thêm class tên red vào.");
boxClassList.classList.add("red");
console.log("- Lưu ý: đã viết sẵn một class tên red trong file style.css để đổi màu chữ");
console.log("");

console.log("Có thể thêm vào nhiều class trong cùng một câu lệnh bằng cách classList.add(\"red\", \"blue\")");
boxClassList.classList.add("red", "blue");
console.log("");


//contains()
console.log("Object.classList.contains() => Kiểm tra xem một class có tồn tại hay không");
console.log(boxClassList.classList.contains("box"));
console.log(boxClassList.classList.contains("alo"));


//remove()
console.log("object");
