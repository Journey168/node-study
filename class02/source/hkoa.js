//一个基于nodejs的入门级http服务 类似下面的代码
//koa的目标是用更简单化 流程化 模块化的方式实现回调部分
// const http = require('http')
// class Hkoa {
//   listen(...args){
//     const server = http.createServer((req,res)=>{
//       this.callback(req,res)
//     })
//     server.listen(...args)
//   }
//   use(callback){
//     this.callback = callback
//   }
// }
// module.exports = Hkoa



// //koa为了能够简化API 引入上下文context的概念 将原始请求对象req和响应对象res封装并挂载到context上并且在context上设置getter和setter从而简化操作
// const http = require('http')
// const context = require('./context')
// const request = require('./request')
// const response = require('./respose')

// class Hkoa {
//   listen(...args){
//     const server = http.createServer((req,res)=>{
//       //创建上下文
//       let ctx = this.createContext(req,res)

//       this.callback(ctx)
//       //响应
//       res.end(ctx.body)
//     })
//     server.listen(...args)
//   }
//   use(callback){
//     this.callback = callback
//   }
  
//   //构建上下文 把res和req都挂载到cxt上去 并且在ctx.req和ctx.request.req同事保存
//   createContext(req,res){
//     const ctx = Object.create(context)
//     ctx.request = Object.create(request)
//     ctx.response = Object.create(response)

//     ctx.req = ctx.request.req = req
//     ctx.res = ctx.response.res = res
//     // console.log(JSON.stringify(ctx))
//     return ctx; 
//   }
// }


//compose用在koa中
const http = require('http')
const context = require('./context')
const request = require('./request')
const response = require('./respose')

class Hkoa  {
  //初始化中间件数据
  constructor(){
    this.middlewares = []
  }
  listen(...args){
    const server = http.createServer(async (req,res)=>{
      //创建上下文
      const ctx = this.createContext(req,res)
      //中间件合成
      const fn = this.compose(this.middlewares)
      await fn(ctx)
      res.end(ctx.body)
    })
    server.listen(...args)
  }
  use(middleware){
    this.middlewares.push(middleware)
  }
  //合成中间函数
  compose(middlewares){
    return function(ctx){
      return dispatch(0)
      function dispatch(i){
        let fn = middlewares[i]
        if(!fn){
          return Promise.resolve()
        }
        return Promise.resolve(
          fn(ctx,function next(){
            return dispatch(i+1)
          })
        )
      }
    }
  }
  //创建上下文对象函数
  createContext(req,res){
    let ctx = Object.create(context)
    ctx.request = Object.create(request)
    ctx.response = Object.create(response)

    ctx.res = ctx.request.req = req
    ctx.req = ctx.response.res = res
    return ctx
  }
}

module.exports = Hkoa