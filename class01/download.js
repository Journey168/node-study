//自定义模块 代码分割 复用手段

module.exports.clone = async function(repo,desc){
  const {promisify} = require('util')
  const download = promisify(require('download-git-repo'));
  const ora = require('ora')
  const process = ora('下载项目。。。。。')
  process.start()

  try {
    await download(repo,desc)
  } catch (error) {
    process.fail()
  }

  process.succeed()
}

