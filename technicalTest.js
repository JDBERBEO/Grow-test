// QUESTION 1

// Given an array of integers, keep a total score based on the following:
//  1. Add 1 point for every even number in the array
//  2. Add 3 points for every odd number in the array, except for the number "5"
//  3. Add 5 points every time the number "5" appears in the array
// Examples:

// Input: [1,2,3,4,5]
// Output: 13

// Input: [17,19,21]
// Output: 9

// Input: [5,5,5]
// Output: 15

//ANSWER:

const scoreCount = (array) => {
  let count = 0
  for(let i = 0; i < array.length; i++) {
    if (array[i] === 5 ) {
      console.log('en 5')
      count += 5
    }else if( array[i] % 2 === 0) {
      count += 1
    }else{
      count += 3
    }
  }
  return count
} 

//QUESTION 2
// Create a function implementing the tribonacci sequence. This is a variation
// on the Fibonacci sequence, in which every next number is found by 
// adding up the two preceding numbers. The tribonacci sequence is 
// similar, but instead of starting with two predetermined numbers, the sequence
// starts with three predetermined numbers and each subsequent number is the sum
// of the three preceding numbers.

//The funcion has two parameters:
// A signature array of 3 elements containing the predetermined starting numbers of the tribonacci sequence
// A non-negative integer of the first n elemetns that the functions should return
// If n == 0 return 0

//Examples 
//tribonacci([0,0,1],9) should == [ 0,0,1,1,2,4,7,13,24]
//tribonacci([1,1,1],5) should == [1,1,1,3,5]
//tribonacci([1,2,3],2) should == [1,2] 

//ANSWER:

function tribonacci(array,n){
  if(n === 0) {
    return 0
  }else if (array.length > n) {
    return array.slice(0,n)
  }else {
    let sum = 0
  for (let i = 0; i<n-3; i++){
    sum = array[i] + array[i+1] + array[i+2]
    array.push(sum)
  }
  return array
  }
}
  
console.log(tribonacci([1,1,1], 5));