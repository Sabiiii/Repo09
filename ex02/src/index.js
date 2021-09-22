
function myFunction (myParametar) {

    if (myParametar) {

        return true;

    }

    return false;
}

myParametar(true);
myParametar(false);
myParametar(true);
myParametar(false);

console.log(myParametar());


module.exports = myFunction;