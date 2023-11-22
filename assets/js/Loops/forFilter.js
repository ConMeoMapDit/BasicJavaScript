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

console.log("ĐỀ MỤC: TÌM TẤT CẢ ĐỐI TƯỢNG CÓ COST = 0 TRONG DANH SÁCH?");
console.log("");

//Sử dụng vong lặp for
count = 0;
for (let index = 0; index < numOfKrNames; ++index) {
    if (KamenRiders[index].cost == 0) {
        console.log(KamenRiders[index]);
    } 
}
console.log("");


// sử dụng filter
var listKr0Cost = KamenRiders.filter((object)=> {
    return object.cost == 0;
})
console.log(listKr0Cost); // trả về undefind