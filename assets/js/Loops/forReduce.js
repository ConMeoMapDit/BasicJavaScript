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

console.log("Sử dụng vòng lặp for: ");
let total = 0;
let initial = 0;
for (let index = 0; index < numOfKrNames; ++index) {
    total += KamenRiders[index].cost;
}
total += initial;
console.log(total);
console.log("");


console.log("Sử dụng Reduce(): ");
count=0;
var totalKrCost = KamenRiders.reduce((total, object) => {
    console.log(count + ": " + total + " " + object.cost);
    count++;
    return total += object.cost;
}, 0)
console.log(totalKrCost);

