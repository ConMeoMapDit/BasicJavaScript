var KamenRider = [
    {
        id: "Heisei2009",
        name: "Kiva",
        isGood: "yes",
        cost: 0,
    },
    {
        id: "Heisei2010",
        name: "Decade",
        isGood: "yes",
        cost: 10,

    },
    {
        id: "Heisei2011",
        name: "Double",
        isGood: "absoluly yes",
        cost: 20,

    },
    {
        id: "Heisei2012",
        name: "OOO",
        isGood: "yes",
        cost: 0,
    }
];

console.log("Số object của mảng: " + KamenRider.length);
console.log("1  " + KamenRider[3]); 
console.log("");

for (let index = KamenRider.length; index > 0; --index) {
    console.log(KamenRider[index-1]);
}
console.log("");

//Vòng lặp forEach làm việc với các mảng object
console.log("Đây là vòng lặp forEach: ");
KamenRider.forEach((key, index)=> {
    console.log(index, key);
});
console.log("");

document.getElementById("allKrName").innerHTML = "Hell yeah";