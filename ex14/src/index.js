function myForLoop1() {

    var evenNumbers = [0, 2, 4, 6, 8];

    for (var evenNumbers = 0; evenNumbers < 8; i++)
    console.log(evenNumbers);

 return evenNumbers;
}

function myForLoop2() {

    var evenInverseNumbers = [8, 6, 4, 2, 0];

    for (var evenInverseNumbers = 8; evenInverseNumbers > 0; i--)
    console.log(evenInverseNumbers);

    return evenInverseNumbers;

}

console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};