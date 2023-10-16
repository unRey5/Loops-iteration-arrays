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

