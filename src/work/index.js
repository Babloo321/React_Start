
let output = [];
function fizzBuzz(count){
    if(count % 3 === 0 && count % 5 == 0){
        ouptut.push("FizzBuzz");
    }else if(count % 3 === 0){
        output.push("Fizz");
    } else if(count % 5 === 0){
        output.push("Buzz");
    } else{
        output.push(i);
    }
    count++;
    console.log(output);
}
for(let i = 0; i < 100; i++){
    fizzBuzz(i);
}