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

//most times people use for loop when they know the number of times the loop plays, otherwise most programmers use the while loop when the number is unlonwn.

let p = 0;

while (p <= 20) {
    console.log('Number ' + p);
    p++;

}

//loop through arrays
let v = 0;

const arrr = [10, 20, 30, 40, 50];


while (v < arrr.length) {
    console.log(arrr[v]);
    v++;
}

//do loop is used when you want a loop to run weather or not a condition is met. it runs no matter what. Code will run once before it checks for condition.
let t = 1;
do {
    console.log('Number ' + t);
    t++;
} while (t <= 20);


//for loop. it is the cleaner way to loop through an array.

const items = ['daniel', 'kate', 'kobe'];

//standard for loop

// for (i = 0; i < arrrr.length; i++) {
//     console.log(arrrr[i]);
// }

//best way

for (const item of items) {
    console.log(item);
}

//loop over objects

const objs = [
    {name: 'Daniel'},
    {name: 'Odey'},
    {name: 'Jnr'},
];

for (const obj of objs ) {

    console.log(obj);
}

//loop over string

const str = 'Hello world';

for (const letter of str) {
    console.log(letter);
}

//loop through map

const map = new Map();
map.set('name', 'Dan');
map.set('age', 29);

for (const [key, value] of map) {
    console.log(key, value);
}


//loop through object values

//for in loop

const colorObj = {
    color1: 'red',
    color2: 'black',
    color3: 'white',
    color4: 'pink',
};

for (const key in colorObj) {
    console.log(key, colorObj[key]);
}

//loop through an array

const colorArr = ['red', 'black', 'green', 'pink'];

for (const key in colorArr) {
    console.log(colorArr[key]);
}




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

//High order array methods
//Foreach just loops through an array just like a for loop

//Foreach

const socials = ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'];

// console.log(socials.__proto__);//use this to get high order array methods

socials.forEach((item) => console.log(item));

const socialObj = [
    {name: 'twitter', url: 'twitter.com'},
    {name: 'facebook', url: 'facebook.com'},
    {name: 'instagram', url: 'instagram.com'},
    {name: 'linkedIn', url: 'linkedIn.com'},
];

socialObj.forEach((item) => console.log(item.name));

//Array.filter

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
})

console.log(evenNumbers);

const arrNames = ['jordan', 'michael', 'harry', 'daniel', 'curt', 'steven'];

const sixDigits = arrNames.filter((word) => {
    return word.length > 4;
})

console.log(sixDigits);


const companies = [
    {name: 'company one', category: 'finance', start: 1981, end: 2004},
    {name: 'company two', category: 'retail', start: 1992, end: 2008},
    {name: 'company three', category: 'auto', start: 1999, end: 2007},
    {name: 'company four', category: 'retail', start: 1989, end: 2010},
    {name: 'company five', category: 'technology', start: 2009, end: 2014},
    {name: 'company six', category: 'finance', start: 198, end: 2010},
    {name: 'company seven', category: 'auto', start: 1986, end: 2016},
    {name: 'company eight', category: 'technology', start: 2011, end: 2016},
    {name: 'company nine', category: 'retail', start: 1981, end: 1989},
    
];

//get only retail companies

const retailCompanies = companies.filter((ret) => {
    return ret.category === 'retail';
});

console.log(retailCompanies);

//get companies that started in or after 1980 and ended in or before 2005

const dateCompanies = companies.filter((company) => {
    return company.start >= 1980 && company.end <= 2005;
})

console.log(dateCompanies);

//filter returns anything that is true on the right side of the array.

//array.map

//maps can return anything you need it to