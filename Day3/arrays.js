let numbers = [1,2,3,4,5,6]; //array
console.log(numbers[5]); //push
numbers.push(8);
console.log(numbers);
numbers.push(9,10,11,12,13);
console.log(numbers);
numbers.pop(); //pop
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.unshift(15); //unshift
console.log(numbers);
numbers.shift(); //shift
console.log(numbers);
numbers.splice(6,0,5); // adding number at a given position
console.log(numbers);
numbers.splice(8,1,3); //adding number at a given position
console.log(numbers);
numbers.splice(6,1); // to delete an element at a given position
console.log(numbers);