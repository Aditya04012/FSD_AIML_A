/*const student={
    name:"aditya",
    rollno:"asfasfasd",
    city:"meerut"
}
const newStudent=student;
newStudent.name="ashray"
console.log(student);
console.log(newStudent);
*/

/*var arr=[1,"virat","joe root"]
var newarr=[23,"jason roy","pat cummins",...arr]
console.log(newarr);*/
/*
const student={
    name:"aditya",
    rollno:"2022b1531005",
    city:"meerut"
}
const {name,rollno,city}=student;
console.log(name,city);


const emp=[1,"name",34.22]
const [x,y,z]=emp;
console.log(x,y,z);
*/

const myset=new Set();
myset.add(24);
myset.add(14);
myset.add(13);
myset.add(23);
//Filter in set
const newarr=Array.from(myset).filter(el=>el%2);
console.log(newarr)

//map in set
const newarr1=Array.from(myset).map(el=>el*2);
console.log(newarr1)

//asynchronus programming







