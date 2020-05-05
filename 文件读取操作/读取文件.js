// fs是file-system的简写，就是文件系统的意思
// 在Node中如果想要进行文件操作，就必须要引入fs这个核心模块
// 例如：fs.readFile就是用来读取文件的

// 1.使用require方法来加载fs核心模块
var fs = require('fs')

// 2.读取文件
// 第一个参数：要读取的文件路径
// 第二个参数：回调函数
// 回调函数中接受两个参数error，data：
//        如果读取失败，error就是错误对象，data是null
//        如果读取成功，error就是null，data是读取到的数据
// 注意在回调函数中第一个参数为error，第二个参数为data
fs.readFile('./hello.txt',(error,data)=>{
    // 但是我们得到的数据是16进制数据，所以我们需要进行转换
    if(error){
        console.log('读取文件失败了')
    }else{
        console.log(data.toString())
    }
})