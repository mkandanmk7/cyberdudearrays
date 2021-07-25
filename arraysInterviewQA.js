
//1. create an Array object:

let fruits = ["apple", "banana"];
console.log(fruits); //["apple","banana"]

// create empty array then add elements method:

let array = [];
array[0] = "mani";
array[1] = 24;
console.log(array); //["mani", 24]

//new Array() method;

let newArray = new Array(4, 5);
console.log(newArray); //[4,5]

//Array.of() method:

let array2 = Array.of(1, 2, 45);
console.log(array2);[1, 2, 45]

//2.Take the below array and copy it using the slice method and the for loop method


let array1 = [1, 3, 4, 5, 6];
let array2 = array1.slice(1, -1); // slice method;
console.log(array2); 

// using for in loop;

let array3 = [];
for (let key in array1) {
    array3[key] = array1[key];
}
console.log(array3);

// 3.empty array; 

let array1 = [1, 2, 3, 4, 5, 7];
let array2 = array1;
array1 = [];
console.log(array1); //[];

console.log(array2); // [1, 2, 3, 4, 5, 7]

// length =0;
let array3 = [1, 2, 3, 4, 5, 7];
array3.length = 0;
console.log(array3);// []

//splice() method;
let array4 = [1, 2, 3, 4, 5, 7];
array4.splice(0, array4.length);
console.log(array4); // []

//pop() using function;

function empty(value) {
    while (value.length) {
        value.pop();

    }

}
let array6 = [1, 2, 3, 4, 5, 7]; 
empty(array6);
console.log(array6); //[]

//4.typeof();
console.log(typeof array3); //object

//5.isarray?


let check = [1, 2, 3];
let a = Array.isArray([1, 2, 3]);
let b = Array.isArray({
    foo: 123,
});
let c = Array.isArray("foobar");
let d = Array.isArray(undefined);
let e = Array.isArray(check);

console.log(a); //true
console.log(b);//false
console.log(c); //false
console.log(d);//false
console.log(e); true

//method 2


function checkArray(value) {
    if (Object.prototype.toString.call(value) === "[object Array]") {
        console.log("Array it is"); 
    } else {
        console.log("its not array");
    }

}
let array1 = "testing";  //its not array
checkArray(array1);
let array2 = [1, 2, 3, 4]; //Array it is
checkArray(array2);


// comparing array ===string method;

let array = [1, 2, 3, 4, 5];

function checkArray(array) {
    "use strict";

    if (typeof array === "string") {
        console.log("its not array");
    }
    else {
        console.log("it is array");
    }
}
checkArray(array);



//6. add item to end of array :

// push() method;
let array = ["apple ", "mango", "guava"];
array.push("banana");
console.log(array); //["apple ", "mango", "guava", "banana"]

//array[] method;

array[array.length] = "papaya";
console.log(array); // ["apple ", "mango", "guava", "banana", "papaya"]


//7.Find the index position of d in this array;

let char = ["a", "b", "c", "d", "f", "e", "h"];
let position = char.indexOf("e");
console.log(position); //5

//8.What will be returned if you look for the index of something that does not exist?

let char = ["a", "b", "c", "d", "f", "e", "h"];
console.log(char.indexOf(5)); // -1 === does not exist (return -1)

//9.Write a function to check if milk exists in your array.


function checkMilk(value) {
    if (items.indexOf(value) === -1) {
        console.log(`${value} is not exist`);
    }
    else {
        console.log(`${value} is exist`);
    }
}
let items = ["milk", "bread", "sugar"];
checkMilk("milk"); //milk is exist
checkMilk("cheese"); //cheese is not exist

//10.Now you've found milk exists add some code to find the index of milk and remove that item.

// using indexOf() and splice() for delete;
var items = ["milk", "bread", "sugar"];

let indexItem = items.indexOf("milk")
console.log(indexItem);

items.splice(0, 1);
console.log(items); //["bread","sugar"] milk deleted.


//11.List the ways to loop over an array.

// for ,for in, for of,forEach();

let number = [1, 2, 3, 4, 5, 6];
let empty = [];
for (let i = 0; i < number.length; i++) {
    empty.push(number[i]);

};
console.log(empty);
let a = [];
for (key in number) {
    a.push(number[key])
}
console.log("for in loop:", a);

let b = [];
for (key1 of number) {
    b.push(key1);
}
console.log("for of :", b);

let c = [];
number.forEach((key2) => {
    c.push(key2);
})
console.log("forEach:", c);

//12.Write some code to put these numbers in order (Ascending & Descending)

let numbers = [1, 12, 2, 23, 77, 7, 33, 5, 99, 234];

let sorting = numbers.sort((a, b) => {
    return a - b;
})
console.log(sorting); // [1, 12, 2, 23, 234, 33, 5, 7, 77, 99]

//13.Write some code to place this list in alphabetical order

let p = ["a", "z", "e", "y"];
// if loop
let s = p.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    else if (a > b) {
        return 1;
    }
    else
        return 0;
})

console.log(s); //["a", "e", "y", "z"]
// simple 
let sorting = p.sort()
console.log(sorting); //["a", "e", "y", "z"]

//14.What is the length of these arrays

var arr1 = [, , ,]; //3

var arr2 = new Array(5); //5 

var arr3 = [1, 2, 3, 4, 5]; //5

var array = [
    [1, 2, 3],
    [4, 5, 6],
]; //2;
console.log(arr1.length); 
console.log(arr2.length);
console.log(arr3.length);
console.log(array.length);

//15.What are the results of these splice and slice methods

var a = ["zero", "one", "two", "three"];
var names = ["jason", "john", "peter", "karen"];

// slice (); start , end


let showElements = a.slice(1, 2);
console.log(showElements); // ["one"]
console.log(a); //slice wont affect org array  //["zero", "one", "two", "three"]

//splice() start,delete,add

let showSpliced = names.splice(1, 2); //splice()affect org array;
console.log(showSpliced); //["john", "peter"]
console.log(names); // ["jason", "karen"]


//16.What are the console logs of these shift and unshift methods

var a = [];

a.unshift(1);//[1]
a.unshift(22); 
var b = console.log(a); //[22,1]
a.shift();
var c = console.log(a); //[1]
a.unshift(3, [4, 5]);
var d = console.log(a); //[3,[4,5],1]
a.shift();
var e = console.log(a); //[[4,5],1]
a.shift(); 
var f = console.log(a);//[1]
a.shift();
var g = console.log(a);//[]

//17.Using reduce add all these numbers

var numbers = [1, 2, 3, 4, 5, 6];

var num = numbers.reduce((a, b) => {
    return a + b;
})
console.log(num); //21

//18.Flatten this array to one single array using reduce

var array = [
    [0, 1],
    [2, 3],
    [4, 5],
]; //concat() method;

let flat = array.reduce((a, b) => {
    return a.concat(b);
})
console.log(flat);//[0, 1, 2, 3, 4, 5]



//19.Filter this array to return just the dogs

var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
];



let dogg = animals.filter((animals) => {
    return animals.species === "dog";

});

console.log(dogg); //{name: "Jessica", species: "dog"}


//20.Using array in question 19 use map function to return all the species

var animals = [
    { name: "Jason", species: "rabbit" },
    { name: "Jessica", species: "dog" },
    { name: "Jacky", species: "owl" },
    { name: "Luke", species: "fish" },
    { name: "Junior", species: "rat" },
    { name: "Thomas", species: "cat" },
];

let speciesList = animals.map((value) => {
    return value.species;
})
console.log(speciesList); //["rabbit", "dog", "owl", "fish", "rat", "cat"]
