const accountId = 114453
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "delhi"
let accountState
 
// accountId = 2    not allowed can't change const values

accountEmail = "hc@gmail.com"
accountPassword = "1267"
accountCity = "Mumbai"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
use let instead
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
