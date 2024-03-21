console.log("<------------------------------------->");
console.log(new Date().toLocaleDateString());


console.log("comparacion: ==");
let counterOne = 100;
let counterTwo = 200;
let responseOne = counterOne == counterTwo;
console.log(responseOne);
console.log("20" == 20);
console.log("20" === 20);

console.log("comparacion: no igual !=");
let responseTwo = counterOne != "100";
console.log(responseTwo);
let responseThree = counterOne !== "100";
console.log(responseThree);

console.log("mayor que > ");
console.log(counterOne > 200); // False

console.log("Mayor igual que >= ");
console.log(counterOne >= 100); // True

console.log("Menor que < ");
console.log(counterOne < 99); // False

console.log("Menor o igual que <= ");
console.log(counterOne <= 100); // True


console.log(10 >= 9);
console.log(0 == 0);