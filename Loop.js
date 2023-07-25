//While
//initilize, Condition, incriment
/*let i = 6;
while (i<=5) {
    console.log("*");
    i++;
}
console.log(i);
//For loop
for (let i = 1; i <= 5; i++){
    console.log("*");
}
//Nested For Loop
for(i = 1;i<=5;i++){
    console.log("@");
    for(j=5;j>=5;j--){
        console.log("*");
    }
}
let num = 1285454345;
while(num>0){
    let res = num%10;
    console.log(res);
    num = parseInt(num/10);
}
//Sum
let sum = 0;
for(i = 0;i<=5;i++){
    sum+= i;
}
console.log(sum);
//even numbers from 1 to 15
let n = 1,m = 15;
for(n =1;n<=m;n++){
    if(n%2==0){
        console.log(`This are Natural numbers : ${n}`);
    }
}
//Odd Number
for(n = 1;n<=15;n++){
    if(n%2==1){
        console.log(`Number is Odd : ${n}`);
    }
}
*/
//Prime Number
for(n = 1;n<=15;n++){
    let prime = 0;
    for(m = 2;m<=n/2;m++){
        if(n%m==0){
            prime = 1;
            break;
        }
        }
        if(prime==0)
            console.log(`Numer is Prime : ${n}`);
}