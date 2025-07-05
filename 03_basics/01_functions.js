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
console.log(LoginUserMessage());
