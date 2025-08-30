const employee={
    name:'naiem',
    id:'it23025',
    dept:'ict',
    amount:3000

}

for(const key in employee){
    const value=employee[key];
    console.log(key,value)
}

//-----------------another process-------------------
const keys =Object.keys(employee);
for(const key in keys){
    const value=employee[key]
}