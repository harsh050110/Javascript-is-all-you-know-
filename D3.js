let a =10;
let b =10;
let x = a+b;

console.log(x);

let age =17;
if(age<18){
    console.log("Adult");
}else{
    console.log("Not Adult");
}



let role = "student";

switch (role) {
    case "admin":
        console.log("Admin");
        break;

    case "student":
        console.log("Student");

    default:
        console.log("Guest");
}


let empolyee_earning=200;

if(empolyee_earning<=200){
    console.log("Employee is good earning");
}else if(empolyee_earning>=1000){
    console.log("Employee is under");
}else{
    console.log("unemployed");
}

let domain= "Full Stack Developer";

switch(domain){
    case "Java Developer":
        console.log("Java Developer");
    case"Frontend Developer":
    console.log("Frontend Developer");
    case "Backend Developer":
        console.log("Backend Developer");
        default:
            console.log("Other Tech domains");
}

let biscuit = "Cream Biscuit";

switch(biscuit){
    case"Cream Biscuit":
    console.log("Cream Biscuit");
    case"Biscoff":
    console.log("Biscoff");
    default:
        console.log("Other Biscuit");
}

