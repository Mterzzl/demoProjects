class Observer {
    constructor() {
        this.message = {}
    }
    $on(type,callback){
        if(!this.message[type]){
            this.message[type] = []
        }
        this.message[type].push(callback)
    }
    $off(type,callback){
        if(!this.message[type]) return;
        if(!callback){
            this.message[type] = undefined
            return;
        }
       this.message[type] = this.message[type].filter(item=>item !== callback)
    }
    $emit(type){
        if(!this.message[type]) return;
        this.message[type].forEach(item=>{
            item()
        })
    }
    // constructor() {
    //     this.message = {} // 消息队列
    // }
    //
    // /**
    //  * `$on` 向消息队列添加内容
    //  * @param {*} type 事件名 (事件类型)
    //  * @param {*} callback 回调函数
    //  */
    // $on(type, callback) {
    //     // 判断有没有这个属性（事件类型）
    //     if (!this.message[type]) {
    //         // 如果没有这个属性，就初始化一个空的数组
    //         this.message[type] = [];
    //     }
    //     // 如果有这个属性，就往他的后面push一个新的callback
    //     this.message[type].push(callback);
    // }
    //
    // /**
    //  * $off 删除消息队列里的内容
    //  * @param {*} type 事件名 (事件类型)
    //  * @param {*} callback 回调函数
    //  */
    // $off(type, callback) {
    //     // 判断是否有订阅，即消息队列里是否有type这个类型的事件，没有的话就直接return
    //     if (!this.message[type]) return;
    //     // 判断是否有callback这个参数
    //     if (!callback) {
    //         // 如果没有callback,就删掉整个事件
    //         this.message[type] = undefined;
    //         return;
    //     }
    //     // 如果有callback,就仅仅删掉callback这个消息(过滤掉这个消息方法)
    //     this.message[type] = this.message[type].filter((item) => item !== callback);
    // }
    //
    // /**
    //  * $emit 触发消息队列里的内容
    //  * @param {*} type 事件名 (事件类型)
    //  */
    // $emit(type) {
    //     // 判断是否有订阅
    //     if(!this.message[type]) return;
    //     // 如果有订阅，就对这个`type`事件做一个轮询 (for循环)
    //     this.message[type].forEach(item => {
    //         // 挨个执行每一个消息的回调函数callback
    //         item()
    //     });
    // }
}
