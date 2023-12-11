
let btns = document.querySelectorAll(".btns button");

let setFocused = true;
for (let index = 0; index < btns.length; ++index) {
    btns[index].onfocus = (e) => {
        e.target.style.background = "red";
    }

    btns[index].onblur = (e) => {
        e.target.style.background = "white";
    }
}
//Lưu ý: Khuyên sử dụng CSS để chỉnh sửa màu sắc khi focus

/* ---------------------------- */
//OnKeyDown
let testOKDown = document.getElementById("testOnkeyDown");
testOKDown.onkeydown = (e) => {
    console.log(e.which);
    document.getElementById("testOnkeyDown2").value = e.which;
}

document.getElementById("switchOrO").addEventListener("onkeydown", (e) => {
    e.target.style.background = "aqua";
});