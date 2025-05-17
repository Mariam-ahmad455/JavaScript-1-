// 1
// Expressions: they give values. you can use them in calculations,assigning them to variables,or print them.
// An Expression is everything that produces a value,
let result= 5+3*2;
console.log(result); //11

let introducing=' hello'+ ' ' + 'im mariam';
console.log(introducing);// hello im mariam

let score=80;
let grade =(score>=60) ? 'pass':'fail';
console.log(grade); //pass

// 2
//statements: does something,offten uses expressions, a complete command and it ends with ;
// so a statement is a complete instruction that tells the program to do something.It can include expressions,but it ends with a semicolon and perfom a action.

let sum=3+4; // the expression 3+4 produces a value 7. The whole line is a statement it stores a value.

// 3 
// Bindings: variable:age , value:20 , binging: you are binding the variable age to the value 20.
// so its the action of linking a variable to a value.(like the box).
//differes: variable a name you use to store data and binding is the connection btw the name and the value.(like storing something in box).
let name='mariam';
let major='mis';

// 4 what makes a valid binding name in js ?
// Binding names: to be valid, a binding name (variable name) in js must  
//       1:start with a letter(a-z or A-Z),or a dollar sign($), or an underscore(_)
//       2:can contain letters,nbs,$,_ , but cant start with a nb 
//       3:cannot be a reserved word like (let ,var,if,for,class)
//       4:case sensitive score and Score are different
let _Name='mariam'; //Valid
let $cost=300; // valid
//let 5Name="aya";// invalid
//let var= "test"; // invalid


// 5
// Enviroment: In js the enviroment refers to the place where variables,functions,and bindings live and are stored while your coding is running.
let Name= 'sarah';
function greet(){
    console.log('hello'+ Name);
}
// the name and the greet are added to the enviroment 

// 6
// Functions: its a reusable block of code that performs a task you define it once and you call it whenever you wnat.
function greet(){
    console.log('hello');
} 
// function key word , greet function name , inside {} function is called.


// 7
// console.log: it is important while development since it helps you see what your code is doing
//console.log() prints message or values to the console.
// its useful for debugging ,tracking values,understanding flow
let age=20;
console.log(age);


// 8
// Return value: the return statement in a function does 2 things:
// 1- sends a value back to the called
//2-  stops the function execution once return is executed the function ends immediately,
function add(a,b){
    return a+b;
}
let testing=(2,3);
console.log(testing);// (2,3) returns 5 which gets stored in results and print

// 9
// Contorl Flow: how does js decide what line to run next?
// in js control flow is the order in which the code is executed from top to botom.
//js decides what line to run next based on control structures like ( sequential execution, conditional statements, loops, functions, switch statement)
console.log('step1')
console.log('step2')
console.log('step3')// by defult

if(temperature>30){
    console.log(' its hot')}
    else{
        console.log('its cool')
}// based on a condition


// 10
//conditional  execution: in js , conditional execution lets your code make decisions based on whether something is true or false here is how (if , if-else , is else if else)works
//if statement :runs a block of code only if the condition is true
if (score>80){
    console.log("your grade in this exam is very good");
}

// if else: gives an alternative block to run if the condition is false.
if (score>80){
    console.log("great job");}
else{console.log("keep trying");}

//if else if else: checks multiple conditions
if (score>90){
    console.log("exellent");}
else if (score>70){
    console.log("good");}
else {console.log("bad");}

// 11
// while and do while loop: loops they are used to repeat code as long as the condition is true, but they differ when the condition is checked.
// while loop: check the condition before running the code
while(count<5){
    console.log(count);
    count ++ ;
}

// do while loop: runs the code at least once, then check the condition
let count=1;
do{
    console.log(count);
    count++ ;}
    while(count<=5);

// 12
//indentation :it helps in improving the understanding makes it easier for readers with no indentation poor formating ,bugs
function  introduce (name) {
    if (name){
        console.log("hello"+ name);
    }
}
// 13 for loops
//Initialization: let i = 0 → starts the counter
//Condition: i < 5 → keeps running while true
//Update: i++ → runs after every loop

//Why is it powerful
//Automates repetition: Run code multiple times without repeating yourself
//Custom control: You decide where it starts, when it stops, and how it changes
//Great for loops through arrays, strings, counters, etc.
for (let i=0; i<5; i++){
    console.log(i);
}

// 14
//Breaking out of a loop:
//used to exit when you find for what your looking at 
//to avoid unnecessary iteratins and to make the code faster,efficint
for(let i=0; i<10; i++){
    if (i===5){
        break;
    }
 console.log(i)
}
// 15 
// updating bindings: bindings are variables.updating them means changing their value 
x+=5
x-=2
s*=5
s/=2
x%=4

let Score = 10;
Score +=5; //10

// 16
//the switch statement is a tool for dispatching based on the value of a variable especially when you have multiple conditions to check
//the switch  statement lets you run different code blocks based on value
// use it when checking one variable with many possible values,want to keep your code cleaner than using lots of if-else
let color = 'blue';
switch (color){
    case 'red':
        console.log("stop")
        break
}


// 17
// capitalization helps us to follow clear naming conventions for variables, functions,classes
//naming convention : rules or guidlines used when naming things like variables,functions,classes
let customerName= 'mariam';
function getCustomerInfo(){}
// first word atarts with a lowercaserts , then each new word stats with a capital letter.

//18
// comments: comments are notes in your code that js ignores when running they are used to explain the code
//syntax (//)
let Total=0; // store the value zero in the variable Total.