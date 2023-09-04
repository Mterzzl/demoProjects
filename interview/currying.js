// //正常函数
// function sum(a,b){
//     console.log(a+b);
// }
//
// sum(1,2);    //输出3
// sum(1,3);    //输出4

//柯里化函数
// function curry(a){
//     return (b) =>{
//         console.log(a+b)
//     }
// }
function curry(a){
    return function (b){
        console.log(a+b)
    }
}
// const sum = curry(1);
//
// sum(2);  //输出3
// sum(3);  //输出4

curry(1)(2) //输出3
