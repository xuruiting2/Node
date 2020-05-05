// 可以使用node非常轻松的构建一个web服务器
// 在node中专门提供了一个核心模块：http
// http就是专门来帮你创建编写服务器的

// 第一步还是require引入
var http = require('http')
// 2.使用http.createServer()方法创建一个web服务器
// 返回一个server实例
var server = http.createServer()

// 3.服务器要干嘛？
// 提供服务：数据服务，发请求，接受请求，处理请求，给个反馈（发送响应）
// 注册request请求事件
// 当客户端请求过来，就会自动触发服务器的request请求事件
// request请求事件处理函数，需要接受两个函数
// Request请求对象：请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response响应对象：可以用来给客户端发送响应消息
// 参数可以简写为req和res
server.on('request',function(request,response){
    // 这个url返回的是端口号后面的东西
    console.log('收到客户端的请求了' + request.url)

    // response对象有一个方法：write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端就会一直等待
    // 但是这种write的方式比较麻烦，所以我们可以直接在end的同时传过去响应的数据
    // response.write('hello')
    // 告诉客户端我准备完了你可以返回给客户端了
    // response.end()
    // response.end('hello')

    // 根据不同的请求路径来响应不同的数据
    // 1.获取请求的路径
    // 2.判断路径请求响应
    var url = request.url
    // 注意req.url获取的路径是端口号后面的路径
    // if(url === '/'){
    //     response.end('index page')
    // }else if(url === '/login'){
    //     response.end('login page')
    // }else{
    //     response.end('404 Not Found')
    // }

    // 注意响应的内容只能是字符串或者二进制数据
    if(url === '/product'){
        var product = [
            {
                name:'苹果',
                价格:1000
            },
            {
                name:'香蕉',
                价格:777
            },
            {
                name:'菠萝',
                价格:999
            }
        ]
        // 解决中文乱码的问题,其中text/plain是普通文本的意思
        // 其中我们也可以响应回去一个html格式的内容，浏览器会帮助我们进行解析，text/html就是html类型
        response.setHeader('Content-Type','text/plain; charset=utf-8')
        response.end(JSON.stringify(product))
        // 这样我们就可以或得数据了，但是我们获得的数据中文会乱码
    }
})
// 4.绑定端口号，启动服务器
server.listen(3000,function(){
    // 如果请求成功之后就会启动这个函数
    console.log('服务器启动成功了，可以通过http://127.0.0.1:3000进行访问')
})

