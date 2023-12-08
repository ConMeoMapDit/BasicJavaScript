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
})

let id_parent = document.getElementById("parent");
// id_parent.onclick = function (event) {
//     console.log(event.target );
// }

document.getElementById("uncle").onclick = ((events) => {
    document.getElementById("uncleFriend").innerText = "Bạn của Uncle, 5s sau đi";

    setTimeout(()=>{
        document.getElementById("uncleFriend").innerText = "";
    },5000);
});