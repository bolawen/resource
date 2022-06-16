const Koa = require("koa");
const KoaBody = require('koa-body');
const {cors} = require('./middleware');
const {rootPath} = require('./util');
const KoaStatic = require('koa-static');
const requireAll = require('require-all');

const app = new Koa();

app.use(KoaStatic(rootPath("./")));
app.use(KoaBody({ multipart: true }));
app.use(cors);
const routerList = requireAll(rootPath("./server/router"));
Object.keys(routerList).forEach((router) => {
  app.use(routerList[router].routes()).use(routerList[router].allowedMethods());
});
app.listen(4001,()=>{
  console.log('资源服务启动成功！');
});
