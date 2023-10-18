//Loops - repeats something over and over again until a certain condition is met.

//for ([initialExpression]; [conditionExpression]; [incrementExpression]) statement;

// for (let i = 0; i <= 10; i++) {
//     console.log('number ' + i);
// }

//Nested loops

for (let j = 1; j <= 12; j++) {
    console.log('Number ' + j);

    for (let k = 1; k <= 12; k++) {
        console.log(`${j} * ${k} = ${j * k}`);
    }
}

//loop through an array

const names = ['Brad', 'Sam', 'Daniel', 'John', 'Tim'];


for (let i = 0; i < names.length; i++) {
    if (i === 2) {
        console.log(names[i] + ' is the best');
    } else {
        console.log(names[i]);
    }

}

//break and continue statements
//check for certain conditions and when its met, set a break.

//Break

for (let v = 0; v <= 20; v++) {

    if (v === 15) {
        console.log('Breaking...');
        break;
    }
    console.log(v);
}

//continue

for (let c = 0; c <= 10; c++) {

    if (c === 4) {
        continue;
    }

    console.log(c);
}

//While loop and do while loop

//Fizbuzz Challenge

for (let o = 1; o <= 100; o++) {
    if (o % 3 === 0 && o % 5 === 0) {
        console.log('FizzBuzz');
    } else if (o % 5 === 0) {
        console.log("Buzz");
    } else if (o % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(o);
    }
        
}
