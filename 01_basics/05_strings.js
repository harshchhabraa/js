const name = "Harsh"
const repoCount = 20

// console.log(name + repoCount + "value");         don't use this syntax it is outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);      //prefer using this synatax. variable names in the brackets after the dollar sign

const gameName = new String("Harsh-chh-123")    //another way of declaring strings

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("a"));

const newString = gameName.substring(0 , 3);
// console.log(newString);

const anotherString = gameName.slice(-8 , 3)            //using slice we can use negative values which means reverse string will be printed
// console.log(anotherString);

const newStringOne = "      harsh       ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://harsh.com/harsh%20chhabra"
// console.log(url.replace("%20" , "-"));


console.log(gameName.split('-'))










