setTimeout(() => {

    console.log(1)

}, 0)

new Promise((resolve, reject) => {

    console.log(2)

    resolve('p1')

    new Promise((resolve, reject) => {

        console.log(3)

        setTimeout(() => {

            resolve('setTimeout2')

            console.log(4)

        }, 0)

        resolve('p2')

    }).then(data => {

        console.log(data)

    })

    setTimeout(() => {

        resolve('setTimeout1')

        console.log(5)

    }, 0)

}).then(data => {

    console.log(data)

})

console.log(6)
//2 3 6 p2 p1  1  4  5
//promise.then嵌套先从里面执行，遇到setTimeout先折叠起来不看
//setTimeout先注册先执行，不管在那里注册的，第一个碰到的先执行，而且里面的执行完了，才执行下一个setTimeout
//setTimeout1 setTimeout2不执行是因为已经resolve过了
