 function sayMyName() {
     console.log('H');
     console.log('A');
     console.log('R');
     console.log('S');
     console.log('H');
     
 }

//  sayMyName();

function addTwoNumbers(number1 , number2) {
    console.log(number1 + number2);
    
}

// const result = addTwoNumbers(1 , 3);

function LoginUserMessage(username) {
    if(!username) {
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`;
}
// console.log(LoginUserMessage("Harsh"));
// console.log(LoginUserMessage());

function calculateCartPrice(val1 , val2 , ...num1) {
    return num1;
}
// console.log(calculateCartPrice(200 , 500 , 700 , 2000));

const user = {
    username : "harsh" ,
    price : 5000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user);
// // handleObject({
//     username : "sam",
//     price : 200
// })


const myNewArray = [200 , 400 , 600 , 800];
function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
