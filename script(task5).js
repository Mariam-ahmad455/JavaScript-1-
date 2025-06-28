function greetUser(){
    let name =prompt("please enter your name here:");
    if (name){
        document.getElementById("greet").innerText="Hello"+name+"!";
    }

}