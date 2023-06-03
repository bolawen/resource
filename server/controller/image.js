const fs = require("fs");
const Path = require("path");
const { filterDir, isDir, stitchingAddress, filterImage } = require("../util");

class ImageController {
  static async directoryList(ctx) {
    const imagePath = Path.resolve(process.cwd(), "./image");
    const list = fs.readdirSync(imagePath);
    const listFilter = filterDir("./image", list);
    return (ctx.body = {
      code: 0,
      msg: "查询目录列表成功!",
      data: listFilter,
    });
  }
  static async directoryDetail(ctx) {
    const { type } = ctx.request.query;
    if (!type) {
      return (ctx.body = {
        code: 1,
        msg: "请传入图片类型 type !",
      });
    }
    const result = [];
    const recurve = (path, name) => {
      const targetPath = path + name;
      let targetResolvePath = Path.resolve(process.cwd(), targetPath);
      let list = fs.readdirSync(targetResolvePath);
      for (let item of list) {
        if (isDir(targetPath + "/" + item)) {
          recurve(targetPath + "/", item);
        }
      }
      const isDirAll = !list.some((item) => {
        if (isDir(targetPath + "/" + item)) {
          return false;
        }
        return true;
      });
      if (isDirAll) {
        return true;
      }
      list = filterImage(list);
      const length = list.length;
      result.push({
        type,
        dirName: name,
        poster: stitchingAddress(path + name + "/" + list[length - 1]),
      });
    };
    recurve("./image/", type);
    return (ctx.body = {
      code: 0,
      msg: "查询目录详情成功!",
      data: result,
    });
  }
  static async directoryDetailOfCount(ctx) {
    const { type } = ctx.request.query;
    if (!type) {
      return (ctx.body = {
        code: 1,
        msg: "请传入图片类型 type !",
      });
    }
    const result = [];
    const recurve = (path, name) => {
      const targetPath = path + name;
      let targetResolvePath = Path.resolve(process.cwd(), targetPath);
      let list = fs.readdirSync(targetResolvePath);
      for (let item of list) {
        if (isDir(targetPath + "/" + item)) {
          recurve(targetPath + "/", item);
        }
      }
      const isDirAll = !list.some((item) => {
        if (isDir(targetPath + "/" + item)) {
          return false;
        }
        return true;
      });
      if (isDirAll) {
        return true;
      }
      list = filterImage(list);
      const length = list.length;
      result.push({
        type,
        dirName: name,
        poster: stitchingAddress(path + name + "/" + list[length - 1]),
      });
    };
    recurve("./image/", type);
    return (ctx.body = {
      code: 0,
      msg: "查询目录详情成功!",
      data: result.length,
    });
  }
  static async directoryDetailOfList(ctx) {
    const { type, dirName } = ctx.request.query;
    if (!type) {
      return (ctx.body = {
        code: 1,
        msg: "请传入图片类型 type !",
      });
    }
    if (!dirName) {
      return (ctx.body = {
        code: 1,
        msg: "请传入目录名!",
      });
    }
    const path = './image/';
    const targetPath = type === dirName ? path + type : path + type + '/' + dirName;
    const targetResolvePath = Path.resolve(process.cwd(), targetPath);
    let list = fs.readdirSync(targetResolvePath);
    list = filterImage(list);
    const result = [];
    for (let item of list) {
      result.push({
        type,
        dirName,
        fileName: item,
        url: stitchingAddress(targetPath + "/" + item),
      });
    }
    return (ctx.body = {
      code: 0,
      msg: "查询目录详情列表成功!",
      data: result,
    });
  }
}

module.exports = ImageController;
