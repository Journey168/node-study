//核心API之 文件系统
//  const fs = require('fs')
 
// //同步调用
//  const data = fs.readFileSync('./conf.js') //代码会阻塞在这里(同步)
//  console.log(data)

// //异步调用
//  fs.readFile('./conf.js',(err,data)=>{
//    if(err) throw err
//    console.log(data)
//  })
//  console.log('其它操作')


// // fs常常搭配path api使用
//  const path = require('path')
//  fs.readFile(path.resolve(path.resolve(__dirname,'./app/js')), (err,data)=>{
//    if(err) throw err
//    console.log(data)
//  })

// //promisify
// const {promisify} = require('util')
// const readFile = promisify(fs.readFile)
// readFile('./conf.js').then(data=>{
//   console.log(data)
// })

// //fs Promises API node v10
// const fsp = require('fs').promises
// fsp
//   .readFile('./conf.js')
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err))

// async/await
( async () => {
  const fs = require('fs')
  const {promisify} = require('util')
  const readFile = promisify(fs.readFile)
  const data = await readFile('index.html')
  console.log('data',data)
  
  //Buffer的引用方式
  console.log('data1',Buffer.from(data).toString('utf-8'))
})()
