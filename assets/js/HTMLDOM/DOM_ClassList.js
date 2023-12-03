//Class List Property


//add()
//contains()
//remove()
//toggle()

var boxElements = document.querySelector(".box");
console.log(boxElements);

console.log(boxElements.classList);
console.log("");


//Lenght
console.log("Sử dụng classList.length để biết số lượng class trong element:");
console.log(boxElements.classList.length);
console.log("");


//value
console.log("Sử dụng classList.value để biết tên các class trong element:");
console.log(boxElements.classList.value);
console.log("- Lưu ý: classList.value trả về một chuỗi: ");
console.log(typeof boxElements.classList.value);
console.log("");


//add()
console.log("Object.classList.add() => Thêm một class vào element:");
console.log("Sử dụng classList.add(\"red\") để thêm class tên red vào.");
boxElements.classList.add("red");
console.log("- Lưu ý: đã viết sẵn một class tên red trong file style.css để đổi màu chữ");
console.log("");

console.log("Có thể thêm vào nhiều class trong cùng một câu lệnh bằng cách classList.add(\"red\", \"blue\")");
boxElements.classList.add("red", "blue");
console.log("");


//contains()
console.log("Object.classList.contains() => Kiểm tra xem một class có tồn tại hay không");
console.log(boxElements.classList.contains("box"));
console.log(boxElements.classList.contains("alo"));
