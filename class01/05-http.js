//http用于创建web服务的模块

//简单的一个web服务
// const http = require('http')
// const Server = http.createServer((request,response)=>{
//   console.log('there is a request')
//   response.end('a response from server')
// })
// Server.listen(3000)


//web应用
const http = require('http')
const fs = require('fs')
const Server = http.createServer((request,response)=>{
  //显示一个首页
  const {url,method,headers} = request
  if(url==='/'&&method==='GET'){
    fs.readFile('index.html',(err,data)=>{
      if(err){
        response.writeHead(500,{'Content-Type':'text/plain;charse=utf-8'})
        response.end('500 , 服务器错误')
        return
      }
      response.statusCode = 200
      response.setHeader('Content-Type','text/html')
      response.end(data)
    })

  }else if(url==="/users"&&method==='GET'){//编写一个接口
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify([{name:'hello',age:'20'}]))

  }else if(method==='GET'&&headers.accept.indexOf('image/*')!==-1){//相应图片的处理
    fs.createReadStream('.'+url).pipe(response)
  }else{
    response.statusCode = 404
    response.setHeader('Content-Type','text/plain;charset=utf-8')
    response.end('404 , 页面没有找到')
  }
})
Server.listen(3000)



// Accept代表发送端（客户端）希望接受的数据类型。 比如：Accept：text/xml; 代表客户端希望接受的数据
// 类型是xml类型。
// Content-Type代表发送端（客户端|服务器）发送的实体数据的数据类型。 比如：Content-Type：
// text/html; 代表发送端发送的数据格式是html。
// 二者合起来， Accept:text/xml； Content-Type:text/html ，即代表希望接受的数据类型是xml格式，本次请
// 求发送的数据的数据格式是html。