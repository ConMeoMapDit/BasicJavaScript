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

let numOfKrNames = KamenRiders.length;
for (let index = 0; index < numOfKrNames; ++index) {
    console.log ("name: " + KamenRiders[index].name + " cost: " + KamenRiders[index].cost);
}
console.log("");

console.log("ĐỀ MỤC: TẤT CẢ ĐỐI TƯỢNG ĐỀU CÓ COST = 0, ĐÚNG KHÔNG?");
console.log("");


console.log("Sử dụng biến Flag: ");
let flagKrCost = false;
for (let index = 0; index < numOfKrNames; ++index) {
    if (KamenRiders[index].cost == 0) flagKrCost = true;
    else break;
}
console.log(flagKrCost);
console.log("");


console.log("Sử dụng every(): ")
KamenRiders.every((object)=> {
    console.log(object.cost == 0);
})
console.log("");


console.log("Các thuộc tính cơ bản của every(): ");
KamenRiders.every((object, index)=> {
    console.log(index);
    return object.cost == 0;
})
console.log("");


//Rút gọn code
var areNoCost2 = KamenRiders.every((object)=> {
    return object.cost == 0;
})
console.log(areNoCost2);
console.log("");


//Lưu ý:
console.log("Lưu ý: Hàm every() luôn trả về giá trị false");
var areNoCost3 = KamenRiders.every(()=> {

})
console.log(areNoCost3);