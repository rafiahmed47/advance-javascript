const number = [3, 4, 6, 8, 12];
// const output = [];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element;
//     output.push(result);
//


// function square(element){
// return element * element
// }

// const squre = element => element * element;
// const squre = x => x * x;

// number.map(function(element, index, array){
//     console.log(element, index, array)
// })

// we can use 3 perameter in a map like element index and array.


// const result = number.map(function(element){
//     return element * element;
// })

// const result = number.map( x => x * x)



// console.log(result);


const bigger = number.filter(x => x> 5);

const isThere = number.find(x => x > 5);
console.log(isThere);
