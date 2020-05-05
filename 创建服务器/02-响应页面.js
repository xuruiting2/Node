var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function(req,res){
     // 1.当用户请求/的时候我们返回index.html
     var url = req.url
     if(url === '/'){
         fs.readFile('./index.html',(error,data)=>{
             if(error){
                 res.setHeader('Content-Type','text/plain;charset=utf-8')
                 res.end('文件无法读取')
             }else{
                 // res.end支持两种数据类型
                 res.setHeader('Content-Type','text/html;charset=utf-8')
                 res.end(data)
             }
         })
     }
})
server.listen(3000,function(){
   console.log('正在启动服务器')
})