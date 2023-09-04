let data = [
    {
        id: 1,
        name: 'label1',
        children: [
            {
                id: 3,
                name: 'label3',
                children: [
                    {
                        id: 4,
                        name: 'label4',
                        children: []
                    },
                    {
                        id: 5,
                        name: 'label5',
                        children: [
                            {
                                id:7,
                                name:"label7",
                                children:[]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'label2',
        children: [
            {
                id: 6,
                name: 'label6',
                children: []
            }
        ]
    }
];
let result = null; // 运行结果
/**
 *实现思路就是通过递归函数判断当前节点是否等于要找的
 *节点id，如果不是再判断是否有children节点，再通过
 *递归的方式将children节点传值到函数里面去调用
 *这样就可以通过递归的方式遍历所有树形结构数据
 *找到对应的节点
 ***/
function getTreeItem (data, id) {
    data.map(item => {
        console.log('===执行顺序===');
        console.log(item.id);
        if (item.id === id) {
            result = item;	// 结果赋值
        } else {
            if (item.children) {
                getTreeItem(item.children, id);
            }
        }
    });
}
function getTreeItemName (data, name) {
    data.map(item=>{
        console.log("-------")
        console.log(item.name)
        if(item.name === name){
            result = item;
        }else {
            if(item.children){
                getTreeItemName(item.children,name)
            }
        }
    })
}
//getTreeItem(data, 5);
getTreeItemName(data,'label1')
console.log(result);
