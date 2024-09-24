var x = 50;
var ex1 = x < 35;
var ex2 = x > 40;

if (ex1 && ex2){
    console.log("True,True");
}

else if (ex1){
    console.log("True,False");
}
 
else if (ex2){
    console.log("False,True");
}
else{
    console.log("False,False");
};


/*
var x = prompt("choose any number");

switch(true){
    case x ===50:
        console.log("True,True");
        break;

    case x < 35:
        console.log("True,False");
        break;

    case x > 40:
        console.log("False,True");
        break;
    
    default:
        console.log("False,False");
};


var ex1 = 35;
var ex2 = 40;
switch(true){
    case ex1 && ex2:
        console.log("True,True");
        break;

    case ex1 < 35:
        console.log("True,False");
        break;

    case ex2 > 40:
        console.log("False,True");
        break;
    
    default:
        console.log("False,False");
};
*/