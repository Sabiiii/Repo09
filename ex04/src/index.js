function compareDifferentValues(m, n) {

    var num1 = [8, "8", '8', "8", 8];
    var num2 = ["8", 8, 8, "8", 8];

    if (m === n) {
        return "Equal"; 
    } 

    return "Not Equal";

}


console.log (compareDifferentValues(8, "8"));
console.log (compareDifferentValues("8", 8));
console.log (compareDifferentValues('8', 8));
console.log (compareDifferentValues("8", "8"));
console.log (compareDifferentValues(8, 8));

 module.exports = compareDifferentValues;
