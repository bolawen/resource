const fs = require("fs");
const Path = require("path");
const { filterDir, stitchingAddress, filterVideo } = require("../util");

class VideoController {
  static async directoryList(ctx) {
    const videoPath = Path.resolve(process.cwd(), "./video");
    const list = fs.readdirSync(videoPath);
    const listFilter = filterDir("./video", list);
    return (ctx.body = {
      code: 0,
      msg: "查询目录列表成功!",
      data: listFilter,
    });
  }
  static async directoryDetail(ctx) {
    const { type } = ctx.request.query;
    const result = [];
    const path = './video/';
    const targetPath = path + type;
    const targetResolvePath = Path.resolve(process.cwd(), targetPath);
    let list = fs.readdirSync(targetResolvePath);
    list = filterVideo(list);
    for (let item of list) {
      result.push({
        type,
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
  static async directoryDetailOfCount(ctx) {
    const { type } = ctx.request.query;
    const result = [];
    const path = './video/';
    const targetPath = path + type;
    const targetResolvePath = Path.resolve(process.cwd(), targetPath);
    let list = fs.readdirSync(targetResolvePath);
    list = filterVideo(list);
    return (ctx.body = {
      code: 0,
      msg: "查询目录详情列表成功!",
      data: list.length,
    });
  }
}

module.exports = VideoController;
