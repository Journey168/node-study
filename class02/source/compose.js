//Koa中间件机制 Koa中间件机制就是函数组合的概念 将一组需要顺序执行的函数
//复合为一个函数 外层函数的参数实际是内层函数的返回值 洋葱圈模式可以形象
//表示这种机制   是Koa的精髓和难点

//异步中间件
function compose(middlewares){
  return function(){
    return dispatch(0);
    //执行第0个
    function dispatch(i){
      let fn = middlewares[i]
      if(!fn){
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(function next(){
          //promise完成后 再执行下一个
          return dispatch(i+1)
        })
      )
    }
  }
}

async function fn1(next){
  console.log("fn1")
  await next()
  console.log("end fn1")
}

async function fn2(next){
  console.log("fn2")
  await delay()
  await next()
  console.log("end fn2")
}

function fn3(next){
  console.log("fn3")
}

function delay() {
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve()
    }, 2000);
  })
}

const middlewares = [fn1,fn2,fn3]
const finalFn = compose(middlewares)
finalFn();



