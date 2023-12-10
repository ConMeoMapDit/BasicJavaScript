// Attribute Events

//Assign using event
//Đây là tất cả sự kiện có thể kích hoạt của thẻ
let getEvents = document.getElementById("show-events");
getEvents.onclick = ((events) => {
    console.log(events);
});

console.log(getEvents.id);

let eventTarget = document.getElementById("e-target");
eventTarget.onclick = function (events) {
    console.log(events.target);
}

//Sự kiện nổi bọt
let family_arr = ["s_child"];
let noiBot = document.getElementById("s-child");
noiBot.onclick = ((e) => {
    console.log(e.target);
});

// let id_parent = document.getElementById("parent");
// id_parent.onclick = function (event) {
//     console.log(event.target );
// }

document.getElementById("uncle").onclick = ((events) => {
    document.getElementById("uncleFriend").innerText = "Bạn của Uncle, 3s sau đi";

    setTimeout(()=>{
        document.getElementById("uncleFriend").innerText = "";
    },3000);
});


//Truy suất đến tất cả thẻ h5
let h5Elements = document.querySelectorAll("h5");
let lengthH5Elements = h5Elements.length;
for (let index = 0; index < lengthH5Elements; ++index) {
    h5Elements[index].onclick = ((e) => {
        console.log(e.target);
    });
}
console.log("");

/* ------------------------------------- */
/* ---------DOM EVENTS Buổi 2----------- */

let inpText = document.getElementById("inpText");
let i = 0;
inpText.onchange = ((e) => {
    console.log("Halo");
});

inpText.oninput = ((e) => {
    console.log(e.target.value);
    i++;
});
console.log("");


//Checkbox
console.log("Đây là check box");
let inpCheckBox = document.querySelector('input[ type="checkbox" ]');
console.log(inpCheckBox);
inpCheckBox.onchange = function(e) {
    console.log(e.target.checked);
}
console.log("");


//Select Options
console.log("đây là Select Option");
let _3options = document.querySelector("select");
_3options.onchange = ((e) => {
    console.log(e.target.value);
    console.log(e.target.selectedOptions[0].text);
    console.log(_3options.selectedIndex);
    console.log(_3options.options[_3options.selectedIndex].text);
});
console.log("");