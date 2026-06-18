// I am on the global scope
console.log("Hello World");
var global_scope_variable = "this is the known universe"
console.log("this is the function declared", name_of_the_function())
// console.log("this is the function expression", name_of_the_function_expression())



// Examples of functions and their signature

// => function declaration
function name_of_the_function(){ // this is the signature for a function declaration
    // function body
    return "This is returned from the function declaration"
}

                // key property for declaration is hoisting

// => function expression
const name_of_the_function_expression = function(){ // this is the signature for a function expression
    // function body
    return "This is function expression"

}

// => fat arrow function
const arrow_function = (x, y) => { // function signature
        // function body
        let new_int = 25
        return x + y + new_int
}

console.log("this is the fat arrow expression", arrow_function(3, 6))


// arguments && Parameters  => function variables
// can either pick variable or not


let name      =   "wassabi" // we normally declare variable in this manner
// parameter      argument // when you want to pass variable to a function

console.log(arrow_function(4, 5))
