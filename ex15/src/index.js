function myDoWhile() { 

    var myNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
    
    do {
        console.log(myNumbers);
        i++;

    } while (myNumbers < 9);

}

console.log(myDoWhile());

module.exports = myDoWhile;
