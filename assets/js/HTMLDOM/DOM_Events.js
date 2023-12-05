// Attribute Events

//Assign using events
h5Elements = document.querySelector("h5");

h5Elements.onclick = ((events) => {
    console.log(events);
});