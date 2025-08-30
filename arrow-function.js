//function declaration
function add(num1,num2){
    return num1+num2;
}

//function expression
const value=function(num1,num2){
    return num1+num2;
}


//arrow function

const add2 = (num1,num2)=>num1+num2
const result1=add2(44,66)
const result=value(33,66);
console.log(result)
console.log(result1);
const multiple=(n1,n2)=>n1*n2;
console.log(result)

// //multiline arrow function
// const xx=(x,y)=>{
//     const double=x*2;
//     const double1=y*2;
//     return double,double1;
// }
// const ff=xx(3,5)