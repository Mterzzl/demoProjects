const arr = [1,2,2,6,6]
let result = []
function f() {
    arr.filter((item, index) => {
        if(arr.indexOf(item) === index)
            result.push(item)
    })
}
f()
console.log(result)
