console.log("Hello world")
var global_scope_variable = "This is the universe."
console.log("Hello, I'm Don Sergon.", name_of_the_function())

function name_of_the_function(){
    return "He goes to Moringa School."
}

const name_of_the_function_expression = function (){
    return "He does software engineering."
}

const arrow_function = (c, d) => {
    let new_init = 50
    return c + d + new_init
} 

console.log("This is the new expression", arrow_function(6,9))