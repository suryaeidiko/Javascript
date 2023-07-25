//Function
/*let fullName = name("Surya","Prakash");
console.log(fullName);
function name(a,b){
    return a + " " + b;
}

function num(a){
    return 8+7*a;
}
let a = num(5);
console.log(a);

const Name = "BMW";
var Color = color("Black");
console.log(Color);
function color(a){
    return Name + " is in " + a + " color";
let text = "We are the so-called \"Vikings\" from the north.";
console.log(text);
}
//Object
const Employee = {eName1:"Surya",eId:954,domine:"IIB",age:23};
console.log(Employee.eName + " " +Employee.age);
let lengt = Employee.eName?.length;
console.log(lengt);
let Employee = {
    Name : "Surya",
    Eid : 954,
    Laptop1 : {
        LName1 : "Lenovo",
        RAM : 16
    }
}
delete Employee.Laptop;
console.log(Employee.Laptop?.LName?.length);
*/
function highExp(Employee,Employee1){
    if(Employee.Experience > Employee1.Experience){
        console.log(Employee);
    }
    else{
        console.log(Employee1);
    }
}
let Employee = {
    Name : "Surya",
    Eid : 954,
    Experience : '3y',
    Details : function(){
        console.log(this.Eid);
    }
}
let Employee1 = {
    Name : "CSP",
    Eid : 955,
    Experience : '2y',
    Details : function(){
        console.log(this.Eid);
    }
}
let result = highExp(Employee,Employee1);