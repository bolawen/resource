const Fs = require('fs');
const Path = require('path');

const isDir = (targetPath) => {
  return Fs.lstatSync(Path.resolve(targetPath)).isDirectory();
}

const rootPath = (path) => {
  return Path.join(process.cwd(), path);
}

const filterDir = (targetDir, fileList) => {
  return fileList.filter(item => {
    return Fs.lstatSync(Path.resolve(targetDir + "/" + item)).isDirectory();
  });
}
const filterImage = (list) => {
  const reg = /\.(jpe?g|png|gif)$/i;
  return list.filter(item => {
    return reg.test(item);
  });
}
const filterVideo = (list) => {
  const reg = /\.(mp4|avi|flv)$/i;
  return list.filter(item => {
    return reg.test(item);
  });
}

const stitchingAddress = (resourcePath) => {
  const prefix = resourcePath.slice(0, 2);
  if (prefix == './') {
    return "http://localhost:4001/" + resourcePath.slice(2)
  } else {
    return ''
  }
}

module.exports = {
  isDir,
  rootPath,
  filterDir,
  filterImage,
  filterVideo,
  stitchingAddress
}