console.log("Hello World!")
var global_scope_variable = ("This is the gloabl scope.")
console.log("My name is Don.",name_of_the_function())

function name_of_the_function(){
    return "I study software engineering."
}

const arrow_function = (x, y) => {
    let new_init = 10
    return x + y + new_init
}

console.log("This is the final expression", arrow_function(3, 6))