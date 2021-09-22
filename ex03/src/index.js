
function myEqualFunction(num) {

    if (num === 5)
       (num === 23)
       (num === "23")
       (num === '23')
       (num === "text") 
       
       {
           
        return "Equal"; 
    }

    return "Not equal";

}

myEqualFunction(4);
myEqualFunction(23);
myEqualFunction()


console.log(myEqualFunction(5));
console.log(myEqualFunction(23));
console.log(myEqualFunction("23"));
console.log(myEqualFunction('23'));
console.log(myEqualFunction("text"));


module.exports = myEqualFunction;