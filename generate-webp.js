/*
 * @Author: Harrison
 * @Date: 2021-04-26 17:14:40
 * @Description: generate webp
 */
const sharp = require("sharp");
const fs = require("fs-extra");

const baseDirs = ["./assets/"];
function readImgs(dir) {
  const files = fs.readdirSync(dir);
  const imgs = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let states = fs.statSync(dir + file);
    if (states.isDirectory()) {
      imgs.push(...readImgs(dir + file + "/"));
    }
    if (/\.(png|jpe?g|gif|webp)(\?.*)?$/.test(file)) {
      const kbSize = states.size / 1024
      // console.log('img origin size', dir + file, kbSize + 'kb')
      imgs.push(dir + file);
    }
  }
  return imgs;
}
function run(baseDir) {
  const imgs = readImgs(baseDir);
  const needWebpImgs = imgs.filter(
    img => !/\.webp$/.test(img) && !imgs.includes(img + ".webp")
  );
  const needDeleteWebpImgs = imgs.filter(img => {
    if (/(.+)\.webp$/.test(img)) {
      return !imgs.includes(RegExp.$1);
    }
    return false;
  });
  console.log("---------------------");
  console.log(`${baseDir}'s needWebpImgs: `, needWebpImgs);
  needWebpImgs.forEach(img => {
    sharp(img).toFile(img + ".webp", (err, info) => {
      err && console.log("webp error", err);
    });
  });
  console.log("---------------------");
  console.log(`${baseDir}'s needDeleteWebpImgs: `, needDeleteWebpImgs);
  needDeleteWebpImgs.forEach(img => fs.removeSync(img));
}
baseDirs.forEach(dir => run(dir));
console.log("generate webp finish");
