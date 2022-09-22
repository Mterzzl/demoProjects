// let obj = {
//     fn1:function() {
//         console.log(this);
//     },
//     fn2:function(){
//         fn3();
//     }
// }
// function fn3(config) {
//     console.log(this);
// }
// fn3();//this->window
// obj.fn1();//this->obj
// obj.fn2();//this->window
function a(app){
    console.log(this.app)
}


