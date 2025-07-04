//object literals

const mySym = Symbol("key1");

const JsUser = {
    name : "harsh",
    "full name" : "Harsh Chhabra",
    [mySym] : "MyKey1" ,
    age : 18,
    location : "delhi",
    email : "harshchhabra1812@gmail.com" ,
    isLoggedIn : false , 
    lastLoginDays : ["Monday" , "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email= "harsh@google.com";
// Object.freeze(JsUser);
// console.log(JsUser.email);
JsUser.email = "harshchhabra1812@gmail.com";
// console.log(JsUser.email);

JsUser.greeting = function() {
    console.log("hello JS user");    
}

JsUser.greetingTwo = function() {
    console.log(`hello JS user, ${this.name}`);    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






