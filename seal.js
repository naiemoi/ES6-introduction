const employee={
    name:'naiem',
    id:'it23025',
    dept:'ict',
    amount:3000

}
//delete employee.name;
//seal allow modification but not delete or add
Object.seal(employee)
employee.amount=employee.amount+2000
console.log(employee)
employee.location='dhaka'
console.log(employee)