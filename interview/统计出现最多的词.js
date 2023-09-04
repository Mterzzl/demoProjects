let article = "the re the re mg mg mg mg mg ew";
function findMostWord(article) {
    let n = []
    n = article.split(" ")
    //console.log(n)
    let res = {}
    n.forEach(item=>{
        //console.log(item)
        res[item] ? res[item] += 1 : res[item] = 1
    })
    //console.log(res)
    var max = 0
    var maxWord = 0
    for(let r in res){
        //console.log(r,res[r])
        if(res[r] > max){
            max = res[r]
            maxWord = r
        }
    }
    console.log(max,maxWord)
}
findMostWord(article)
