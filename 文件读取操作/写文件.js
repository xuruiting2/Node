var fs = require('fs')
// 第一个参数是要写入的文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数,回调函数中只有error一个参数
fs.writeFile('./hello.txt','大家好我是写文件',error=>{
    if(error){
        console.log("文件写入失败")
    }else{
        console.log('文件写入成功')
    }
    
})