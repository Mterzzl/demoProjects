var len =117;
let func = {
    len:935,
    showlen:function () {
        console.log(this.len)
    },
    show : function () {
        (function (cb) {
            cb()
        })(this.showlen)
    }
}
func.show()
