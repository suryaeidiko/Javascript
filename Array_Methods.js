/*let names = ['surya','Prakash'];
console.log(names[1].length);           it will print length
let Laptop = ['RAM','Lenovo','i7',8]
for(i = 0;i<Laptop.length;i++){
console.log(Laptop[i]);
}
console.log(Laptop.reverse());          it will print elements in reverse
console.log(Laptop.sort());             it will print elements in ascending or descending order
console.log(Laptop.fill('Surya'));      it will fill elements with the string or number
console.log(Laptop.join('_/'));         it will join string to every element
console.log(Laptop.toString());         //it will convert elements into string
console.log(Laptop.pop());              //pop remove last element
console.log(Laptop);
Laptop.shift();                         //shift remove first element
console.log(Laptop);
Laptop.push('Processor');             //Add elements at last
console.log(Laptop);
Laptop.unshift('Mouse');                //Add element at 1st
console.log(Laptop);
let nums = [2,1,22,1,14,1];
let result = Laptop.concat(nums);
console.log(result);
let Laptop = ['RAM','Lenovo','i7',8]
Laptop.splice(2,1,'Surya');                 //it replace element based upon indexNo and noOfElements
console.log(Laptop);
let Laptop = [8,5,7,2,5,2,1];
console.log(Laptop.lastIndexOf(2));       //it will print last element of num
console.log(Laptop.indexOf(2));             //it will print 1st element of num
let elements = Array.of('2','1','8','5','7');       //it creats the new array
console.log(elements);
console.log(elements.slice(1,5));         It creates new array by slicing index 1 to 4
let elements = ['2','1','8','5','7','1'];
function even(element){
    return element % 2 == 0;
}
let firsteven = elements.findIndex(even);
console.log(firsteven);                         it return the index of 1st even num
let elements = ['2','1','8','5','7','1'];
function odd(element){
    return element % 2 != 0;
}
let firstodd = elements.find(odd);
console.log(firstodd);                          it return the num of 1st odd num
let Laptop = ['RAM','Lenovo','i7',8]
let check = Laptop.includes(8);                 includes check whether the number or string present in Array
console.log(check);
let Laptop = ['RAM','Lenovo','i7',8]
console.log(Array.isArray(Laptop));              
let name = 'Surya';
console.log(Array.isArray(name));  it check and print true is data is in array or false if data is not in array
let num = [2,5,1,5,6,9,7,2,10];
function even(number){
    if (number % 2 == 0)        //The filter() method returns a new array with all elements that
        return true;                pass the test defined by the given function.
    else
        return false;
}
let evennum = num.filter(even);
console.log(evennum);               //The map() method creates a new array 
let num = [2,5,7];                   with the results of calling a function for every array element. 
function number(data){
    return data * data;
}
let square = num.map(number);
console.log(square);
let num = [2,5,7];
function add(number){
    console.log(number + 8);    The forEach() method executes a provided function for each array element.
}
num.forEach(add);
let num = [2,5,7];
function even(number){          The some() method tests whether any of the array 
    return number % 2 == 0;     elements pass the given test function.
}
console.log(num.some(even));
let num = [3,5,7,9];
function odd(number){               The every() method checks if all the array 
    return number % 2 != 0;         elements pass the given test function.
}
console.log(num.every(odd));
let char = ['S','B','I','A'];   The entries() method returns a new Array Iterator 
let iterat = char.entries();    object containing key/value pairs for each array index.
for (let entry of iterat){
    console.log(entry);
}
let char = ['S','B','I','A'];
let iter = char.keys();             The keys() method returns a new Array Iterator 
for (let key of iter){              object that contains the keys for each element in the array.
    console.log(key);
}
let char = ['S','B','I','A'];
let iter = char.values();           The values() method returns a new Array Iterator 
for(let value of iter){             object that contains the values for each index in the array.
    console.log(value);
}
let newArray = Array.from('surya');     The from() method creates a new array from any array-like
console.log(newArray);                   or iterable object.
let names = ['surya','c','prakash','isedgbd'];
names.copyWithin(0,1);                  //The copyWithin() method copies array elements from one 
console.log(names);                       position to another in the given array.
let date = ['now',new Date()];
let res = date.toLocaleString();        //The Array.toLocaleString() method returns a 
console.log(res);                           string representing the elements of the array in a particular locale.
let value = [8,5,[7,11,[2,1,22],1],14,1];
let res = value.flat();                     //The flat() method creates a new array by
console.log(res);                           flattening a nested array up to the specified depth.
*/
let num = [2,19,8,7];
let res = num.flatMap((num)=> num + 1);     //The flatMap() method first maps each element of an array 
console.log(res);                           //using a mapping function, then flattens it into a new array.
