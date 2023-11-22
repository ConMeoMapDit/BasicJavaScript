var KamenRiders = [
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
        cost: 30,

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


//for of
console.log("iterator của key là: ");
for (const iterator of KamenRiders) {
    console.log(iterator);
}
console.log("");


console.log("typeof của key là: ");
for (const iterator of KamenRiders) {
    console.log(typeof iterator);
}
console.log("");

//Một cách sử dụng forOf khác
for (const value of KamenRiders[0].name) {
    console.log(value);
}