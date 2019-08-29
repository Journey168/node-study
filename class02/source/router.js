
class Router {
  constructor(){
    this.stack = []
  }
  register(path,methods,middleware){
    let route = {path,methods,middleware}
    this.stack.push(route)
  }
  //实现get和post方法 
  get(path,middleware){
    this.register(path,"get",middleware)
  }
  post(path,middleware){
    this.register(path,"post",middleware)
  }

  routes(){
    let stock = this.stack
    return async function(ctx,next){
      let currentPath = ctx.url
      let route
      for(let i=0; i<stock.length; i++){
        let item = stock[i]
        //判断path和method
        if(currentPath=== item.path&&item.methods.indexOf(ctx.method)>=0){
          route = item.middleware
          break
        }
      }
      if(typeof route === 'function'){
        route(ctx,next)
        return
      }
      await next()
    }
  }
}

module.exports = Router