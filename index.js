var customerName = 'bob'
const leastFavoriteCustomer = '...'


// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
return customerName = customerName.toUpperCase()
   
}

//declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
   bestCustomer = 'not bob'
   
}

//See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'

}

//unsuccessfully tries to reassign the least favorite customer 
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Bob'

}