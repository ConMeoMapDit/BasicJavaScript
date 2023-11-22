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
];

//In
let numOfKrNames = KamenRiders.length;
for (let index = 0; index < numOfKrNames; ++index) {
    console.log ("name: " + KamenRiders[index].name + " cost: " + KamenRiders[index].cost);
    
}
console.log ("");

console.log("ĐỀ MỤC: CÓ ÍT NHẤT 1 ĐỐI TƯỢNG CÓ COST = 0, ĐÚNG KHÔNG?");
console.log("");

console.log("Sử dụng biến Flag: ");
let flagKrCost = true;
for (let index = 0; index < numOfKrNames; ++index) {
    if (KamenRiders[index].cost == 0) {
        flagKrCost = true;
        break;
    }
    else flagKrCost = false;
}
console.log(flagKrCost);
console.log("");


//Rút gọn code
console.log("chỗ này là optimize code")
var isOneRight2 = KamenRiders.some((object) => {
    return object.cost == 0;
})
console.log(isOneRight2);
console.log("");


//Lưu ý
console.log("Lưu ý: Hàm some() luôn trả về giá trị true");
var isOneRight3 = KamenRiders.some(()=> {

})
console.log(isOneRight);