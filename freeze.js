const employee={
    name:'naiem',
    id:'it23025',
    dept:'ict',
    amount:3000

}
//delete employee.name;
//freeze do not allow modification
Object.freeze(employee)
employee.amount=employee.amount+2000
console.log(employee)
employee.location='dhaka'
console.log(employee)