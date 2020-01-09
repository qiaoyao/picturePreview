import Router from "koa-router";

import user from "../controllers/user.js";
// import common from "../controllers/common.js";

const router = new Router({ prefix: "/api" });

router.post("/login", user.login);
// router.post("/upload", common.upload);

export default router;
