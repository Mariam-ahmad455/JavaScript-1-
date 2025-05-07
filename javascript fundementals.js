let text="Javascript";
let number=26;
let isTrue=True ;
let emptyValue=null;
let notset;


// printing the types:
console.log( text);
console.log(isTrue);
console.log(number);
console.log(emptyValue);
console.log(notset);


let a=20 //number
let b= 2 //number
let c="5"   //  string 

let WrongResult =a+b+c;
console.log(WrongResult); // The output will be "2025" since we add a sting so it will become a sting not a value of a number


let value1="200";
let value2=false;

console.log(+value1); // the output will be 200
console.log(-value1);// the output will be -200
console.log(+value2);// the output will be 0
console.log(-value2);// the output will be -0

console.log(2=="2");// true
console.log(2==="2")// false
console.log(null==undefined);// true
console.log(null===undefined);// false
console.log(true==0);// true
console.log(true===0);//false
console.log(3==="3");//false


let s= null;
let l=undefined;
console.log( s==l);// true
console.log(s===l);// false

let v1="234";
let v2=false;
let v3;
let v4="";
console.log(Number(v1),string(v1),Boolean(v1));
console.log(Number(v2), String(v2),Boolean(v2));
console.log(Number(v3), Boolean(v3),String(v3));
console.log(Number(v4),Boolean(v4),String(v4),null(v4));
console.log("--------");

convert("0");
convert(0);
convert(undefined);
