
function myFunction(myParametar) {

    if (myParametar) {

        return "The parametar is true!";

    };

    return "The parametar is false!";
}


myFunction(true);
myFunction(false);
myFunction(true);
myFunction(false);

console.log(myFunction());


module.exports = myFunction;