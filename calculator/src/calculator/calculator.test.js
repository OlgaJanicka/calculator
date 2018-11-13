import jest from "jest";
import Calculator from "./calculator";
let description = "craetes calculator without failing";
let calculatorCreationsTest =()=>{
    let calculator=new Calculator();

}
it(description,calculatorCreationsTest);

it("adds two number correctly",function(){
    let calculator=new Calculator();
    let sum = calculator.add(2,3);
    expect (sum).toBe(5);
})



it("subtracts two number correctly",()=>{
    let calculator=new Calculator();
    let difference = calculator.subtract(2,3);
    expect (difference).toBe(-1);
})

it("multiply two number correctly",()=>{
    let calculator=new Calculator();
    let multi = calculator.multiply(2,3);
    expect (multi).toBe(6);
})

it("divide two number correctly",()=>{
    let calculator=new Calculator();
    let div = calculator.div(9,3);
    expect (div).toBe(3);
})