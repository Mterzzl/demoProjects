class MyPromise {
    constructor(executor) {
        this.PromiseState = "pending"
        this.PromiseResult = null
        this.callbacks = []

        //console.log(this)
        const self = this;

        function resolve(data) {
            if (self.PromiseState !== "pending") return;
            self.PromiseState = "fulfilled"
            self.PromiseResult = data;
            //执行失败的回调
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onResolved(data)
                })
            })
        }

        function reject(data) {
            if (self.PromiseState !== "pending") return;
            self.PromiseState = "rejected"
            self.PromiseResult = data;
            setTimeout(() => {
                self.callbacks.forEach(item => {
                    item.onRejected(data)
                })
            })
        }

        try {
            executor(resolve, reject);
        } catch (e) {
            reject(e);
        }
    }

    then(onResolved, onRejected) {
        const self = this;
        if (typeof onRejected !== "function") {
            onRejected = reason => {
                throw reason;
            }
        }
        if (typeof onResolved !== "function") {
            onResolved = value => value;
        }
        return new MyPromise((resolved, rejected) => {
            function callback(type) {
                try {
                    let result = type(self.PromiseResult);
                    if (result instanceof MyPromise) {
                        result.then(v => {
                            resolved(v)
                        }, r => {
                            rejected(r)
                        })
                    } else {
                        resolved(result)
                    }
                } catch (e) {
                    rejected(e)
                }
            }

            //调用回调函数
            if (this.PromiseState === "fulfilled") {
                setTimeout(() => {
                    callback(onResolved)
                })
            }
            if (this.PromiseState === "rejected") {
                setTimeout(() => {
                    callback(onRejected)
                })

            }
            if (this.PromiseState === "pending") {
                //保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onRejected: function () {
                        callback(onRejected)
                    }
                })
            }
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                //状态设置为成功的回调
                resolve(value)
            }
        })
    }

    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    static all(Promises) {
        let count = 0;
        let arr = [];
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < Promises.length; i++) {
                Promises[i].then(v => {
                    count++;
                    arr[i] = v;
                    //不用push是因为改变状态顺序可能不一致，因为有对象内有异步函数
                    if (count === Promises.length) {
                        resolve(arr);
                    }
                }, r => {
                    reject(r)
                })
            }
        })
    }

    static race(Promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < Promises.length; i++) {
                Promises[i].then(v => {
                    //修改状态
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}

