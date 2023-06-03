const AllowOrigin = [
  "http://localhost:8090",
  "https://bolawen.com",
  "http://localhost:8080",
  "http://localhost:3000",
];

const isAllowOrigin = (origin, allowOriginList) => {
  return allowOriginList.some((item) => item == origin);
};
const isAllowReferer = (referer, allowRefererList) => {
  return allowRefererList.some((value) => {
    return referer.includes(value) == true;
  });
};
const cors = async (ctx, next) => {
  const origin = ctx.request.headers.origin || "";
  const referer = ctx.request.header.referer || "";
  if (
    !isAllowOrigin(origin, AllowOrigin) &&
    !isAllowReferer(referer, AllowOrigin)
  ) {
    return (ctx.body = {
      code: 1,
      msg: "非法域名",
    });
  }
  ctx.set("Access-Control-Allow-Origin", origin);
  ctx.set("Access-Control-Allow-Headers", "Content-Type,Authorization");
  ctx.set("Access-Control-Allow-Credentials", true);
  ctx.set("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  ctx.set("Content-Type", "*");
  if (ctx.method == "OPTIONS") {
    ctx.status = 204;
    return (ctx.body = "");
  }
  await next();
};

module.exports = {
  cors,
};
