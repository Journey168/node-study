//内建模块的引入
// const os = require("os")
// const mem = os.freemem()/os.totalmem()
// console.log(`内存使用率: ${mem}%`)



/**
 * 第三方模块
 */

// //第三方模块体验
// const download = require("download-git-repo") //下载模板
// download('github:su37josephxia/vue-template','test',err=>{
//   console.log(err?'Error':'Success')
// })

//完善使用
// const download = require("download-git-repo")
// const ora = require('ora') //展示进度
// const process = ora('下载。。。。项目')
// process.start()
// download('github:su37josephxia/vue-template','test',err=>{
//   if(err){
//     process.fail()
//   }else{
//     process.succeed()
//   }
// })

//promisify的使用 --让异步任务串行化
const repo = 'github:su37josephxia/vue-template'
const desc = '../test'
const {clone} = require('./download.js')//导入自定义模块
clone(repo,desc)

// async function clone(repo,desc){
//   const {promisify} = require('util')
//   const download = promisify(require('download-git-repo'));
//   const ora = require('ora')
//   const process = ora('下载项目。。。。。')
//   process.start()

//   try {
//     await download(repo,desc)
//   } catch (error) {
//     process.fail()
//   }

//   process.succeed()
// }

