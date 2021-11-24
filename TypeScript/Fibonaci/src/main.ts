var sum : number = 1;
var count = 2;
console.log(0);
console.log(1);
function fibonacci(a: number,b: number): number{
    let c :number= a+b;
    count++;
    sum+=c;
    console.log(c)
    if (count == 10){
        return sum
    }
    fibonacci(b,c)
}

fibonacci(0,1);

console.log('Tổng 10 số đầu tiên :' + sum);