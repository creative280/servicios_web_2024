let fullname = 'Alejandro Taborda Sepulveda'

console.log(fullname.length)
console.log(fullname[1])
console.log(fullname.includes('Alejandro'))
console.log(fullname.indexOf('Alejandro'))
console.log(fullname.startsWith('Alejandro'))
console.log(fullname.endsWith('Alejandro'))
console.log(fullname.slice(0 , 4 ))
console.log(fullname.slice(4))
console.log(fullname.toLocaleUpperCase)
console.log(fullname.toLocaleLowerCase)
console.log(fullname.replace('Alejandro', 'Harald'))
console.log(fullname.repeat(3))
console.log(fullname.trim)
console.log(fullname.split(' '))


var fullname2 = "alejandro";

fullname = fullname2[0].toUpperCase() + fullname2.slice(1);

console.log(fullname); // Salida: "Alejandro"


console.log(null == undefined);
console.log(null === undefined);




counter = 10

if(counter > 100) {
    console.log("Counter > 100")
} else {
    console.log("Counter < 100")
}


counter > 100 ? console.log("counter > 100") : console.log("counter < 100");