// const Hkoa = require('./hkoa')
// const app = new Hkoa()
// app.use((req,res)=>{
//   res.writeHead(200)
//   res.end("hello koa源码")
// })
// app.listen(3000,()=>{
//   console.log('listen at 3000')
// })


// //上下文context
// const Hkoa = require('./hkoa')
// const app = new Hkoa()
// app.use(ctx=>{
//     ctx.body = 'koa上下文的作用'
// })
// app.listen(3000,()=>{
//     console.log('listen at 3000')
// })



// //合成中间的使用
// const Hkoa = require('./hkoa')
// const app = new Hkoa()
// const delay = ()=>Promise.resolve(resolve=>setTimeout(()=>resolve(),2000))

// app.use(async (ctx,next)=>{
//   ctx.body = "1"
//   await next()
//   ctx.body += "5"
// })

// app.use(async (ctx,next)=>{
//   ctx.body += "2"
//   await delay()
//   await next()
//   ctx.body += "4"
// })

// app.use(async (ctx,next)=>{
//   ctx.body += "3" 
// })
// app.listen(3000,()=>{
//   console.log('listen at 3000')
// })


// //中间件router的运用
// const Hkoa = require('./hkoa')
// const Router = require('./router')
// const app = new Hkoa()
// const router = new Router()

// router.get('/index', async ctx => { ctx.body = 'index page'; });
// router.get('/post', async ctx => { ctx.body = 'post page'; });
// router.get('/list', async ctx => { ctx.body = 'list page'; });
// router.post('/index', async ctx => { ctx.body = 'post page'; });

// //路由实例输出父中间件 router.routes()
// app.use(router.routes())

// app.listen(3000,()=>{
//   console.log('listen at 3000')
// })



// //静态资源中间件的使用
// const Hkoa = require('./hkoa')
// const static = require('./static')
// const app = new Hkoa()

// app.use(static(__dirname+'/public'))

// app.listen(3000,()=>{
//   console.log('listen at 3000')
// })



//请求拦截中间件的使用
const Hkoa = require('./hkoa')
const app = new Hkoa()
app.use(require("./interceptor"));

app.listen(3000, '0.0.0.0', () => {
 console.log("监听端口3000");
});