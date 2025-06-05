let number = 0
for (i=0; i<100; i++){
    number ++

    if (number % 3 === 0){
        console.log ("Fizz")}
    if (number % 5 === 0){
        console.log ("Buzz")}
    if (number % 3 === 0 && number % 5 === 0){
        console.log ("FizzBuzz")}
    else {console.log (number)}
}

console.log (number)