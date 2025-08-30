const numbers=[33,55,1,7]
console.log(...numbers)
//const max=Math.max(44,667,11,2222,33)
const maximum=Math.max(...numbers)
console.log(maximum)
const first=[3,5,8,1,9]
const second=[...first]
second.push(4)
const third=[33,...second,33,55,66]
console.log(first)
console.log(second)
console.log(third)
const ages=[33,44,55]
const digit=[44,66,32]
const all=[...ages,...digit]
console.log(all)

const person ={name:'naiem',age:25}
const employ={hoby:'ss',...person}
console.log(employ)

const total =(a,b,c)=>a+b+c;
//const result=total(22,44,6);
const digits=[78,33,99];
total(...digits)