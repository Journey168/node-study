//stream是用于node中流数据交互的接口

//创建输入输出流  文件操作
// const fs = require('fs')
// const rs = fs.createReadStream('./conf.js')
// const ws = fs.createWriteStream('./conf2.js')
// rs.pipe(ws)


//图片操作
const fs = require('fs')
const rs = fs.createReadStream('./01.png')
const ws = fs.createWriteStream('./02.png')
rs.pipe(ws)