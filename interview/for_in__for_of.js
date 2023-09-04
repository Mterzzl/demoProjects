const a = {
    a:1,
    b:3
}
const b = [1,2,3]
for(let i in a){
    console.log(i)//a,b
}
for(let i in b){
    console.log(i)//0,1,2
}
for(let i of b){
    console.log(i)//1,2,3
}
for(let i of a){
    console.log(i)
}
//for of不能遍历对象
