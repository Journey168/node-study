// Buffer  用于在TCP流 文件系统操作 以及其他上下文中与八位字节流进行交互 八位字节组成的数组，可以有效的在js中存储二进制数据

//创建一个长度为10字节以0填充的Buffer
// const buf1 = Buffer.alloc(10)
// console.log(buf1)

//创建一个Buffer包含ascii
// const buf2 = Buffer.from("a")
// console.log(buf2,buf2.toString())

//创建Buffer包含UTF-8字节
//UTF-8 一种变长的编码方案 使用1-6个字节来存储
//UTF-32 一种固定长度的编码方案 不管字符编号的大小 始终使用4个字节来存储
//UTF-16 介于UTF-8和UTF-32之间 使用2个或者4个字节来存储 长度即固定又可变
// const buf3 = Buffer.from('Buffer创建方法')
// console.log(buf3)

//写入BUffer数据
// const buf1 = Buffer.alloc(10)
// buf1.write('hello')
// console.log(buf1)


//读取Buffer数据
// const buf = Buffer.from('Buffer创建方法')
// console.log(buf.toString())

//合并Buffer
const buf1 = Buffer.alloc(10)
buf1.write('hello')
buf2 = Buffer.from('Buffer创建方法')
const buf4 = Buffer.concat([buf1,buf2])
console.log(buf4.toString())