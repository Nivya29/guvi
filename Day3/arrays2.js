let numbers = [1,2,3,4,5,6,7,8];
numbers.unshift(5);
console.log(numbers);
numbers.shift();
console.log(numbers);
numbers.splice(3,0,8);
console.log(numbers);
numbers.splice(3,1,6);
console.log(numbers);
numbers.splice(3,3);
console.log(numbers);