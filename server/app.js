import Koa from "koa";
import path from "path";
// import jwt from "koa-jwt";
import koaBody from "koa-body";
import koaStatic from "koa-static";

import routes from "./routes";

const app = new Koa();

app.use(koaStatic(path.join(__dirname, "/static")));

app.use(
  koaBody({
    multipart: true
  })
);

app.use(async (ctx, next) => {
  let start = new Date();
  await next();
  let ms = new Date() - start;
  console.log("%s %s - %sms", ctx.method, ctx.url, ms);
});

// app.use(jwt({
//   secret: "jwt__token"
// }).unless({
//   path: [/^\/api\/login/, /^\/api\/register/]
// }));

app.use(routes.routes(), routes.allowedMethods());

app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

app.listen(3000);

console.log("koa started at port 3000");
