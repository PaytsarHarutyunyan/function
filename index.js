let main = (firstNumber) => {
    return () => {
        let x = 2;
        let i = 1;
        let result = 1;

        while(i <= x) {
            result *= firstNumber 
            i++;
         }
        return result;
    }
}

let y = main(5)();
console.log(y);





function call() {
    return function f() {
        let num = 0;
        return function() {
            num++;
            return num;
        }
    }
}

    let func = call()();
    
    console.log(func());
    console.log(func());
    console.log(func());
    console.log(func());
    console.log(func());
    console.log(func());