function closure() {
    let sum = 0
    return function (num){
        sum = sum +num
        return sum
    }
}

let result = closure()
console.log(result(1))//1
console.log(result(2))//3
//sum值没有被销毁
