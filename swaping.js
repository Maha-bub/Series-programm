let num1 =7;
let num2 =4;
let num3 =12;
let temp;

 if (num1 > num2){
    temp=num1;
    num1=num2;
    num2=temp;
}
if(num1>num3){
    temp=num3;
    num3=num1;
    num1=temp;
}
if(num2>num3){
    temp=num2;
    num2=num3;
    num2=temp;
}
console.log(num1,num2,num3)