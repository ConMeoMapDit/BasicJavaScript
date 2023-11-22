var KamenRiders = [
    {
        id: "Heisei2009",
        name: "Kiva",
        isGood: "yes",
        cost: 10,
    },
    {
        id: "Heisei2010",
        name: "Decade",
        isGood: "yes",
        cost: 0,

    },
    {
        id: "Heisei2011",
        name: "Double",
        isGood: "absoluly yes",
        cost: 10,

    },
    {
        id: "Heisei2012",
        name: "OOO",
        isGood: "yes",
        cost: 50,
    },
    {
        id: "Hesei2013",
        name: "Fourze",
        isGood: "yes",
        cost: 0,
    }
]
//In
let numOfKrNames = KamenRiders.length;
let count = 0;
for (let index = 0; index < numOfKrNames; ++index) {
    console.log (count + " name: " + KamenRiders[index].name + " cost: " + KamenRiders[index].cost);
    count++;
}
console.log ("");

console.log("Math.random trả về một số float có giá trị từ 0 - 1");
console.log(Math.random());
console.log("");

console.log("Để thay đổi giá trị, ta có thể sử dụng hàm Math.floor(), giá trị in ra = 0");
console.log(Math.floor(Math.random()));
console.log("");


console.log("Learn more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math");