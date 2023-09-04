// function a(){
//     console.log(this)//window
//     function b(){
//         console.log(this)//window
//     }
//     b()
// }
// a()

// function a(){
//     console.log(this)//a
//     function b(){
//         console.log(this)//b
//     }
//     const bo = new b()
// }
// const ao = new a();

// const a = function (){
//     console.log(this)//window
// }
// a()

// function a(){}
// a.prototype.catch = function (){
//     console.log(this)//a
// }
// var b = new a()
// b.catch()

