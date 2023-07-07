"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.router = void 0;
const fs_1 = require("fs");
const Router = require("@koa/router");
const koa_body_1 = require("koa-body");
const sql_1 = require("./sql");
const upload_1 = require("./upload");
const user_1 = require("./user");
const bodyParser = (0, koa_body_1.koaBody)({
    jsonLimit: 50 * 1024 * 1025,
    formLimit: 50 * 1024 * 1025,
});
const multipartBody = (0, koa_body_1.koaBody)({
    multipart: true,
    parsedMethods: [
        koa_body_1.HttpMethodEnum.POST,
        koa_body_1.HttpMethodEnum.PUT,
        koa_body_1.HttpMethodEnum.PATCH,
        koa_body_1.HttpMethodEnum.DELETE,
    ],
    formidable: {
        multiples: true,
        uploadDir: "./../upload",
        keepExtensions: true,
    },
});
const router = new Router({ prefix: "/api" });
exports.router = router;
router
    .post("/loginUser", bodyParser, user_1.loginUser)
    .get("/logoutUser", user_1.logoutUser)
    .post("/registerUser", bodyParser, user_1.registerUser)
    .post("/validateToken", bodyParser, user_1.validateToken)
    .post("/passwordRecover", bodyParser, user_1.passwordRecover)
    .post("/passwordReset", bodyParser, user_1.passwordReset)
    .delete("/entity", user_1.decode, sql_1.deleteEntity)
    .post("/entity", user_1.decode, bodyParser, sql_1.saveEntity)
    .post("/query", user_1.decode, bodyParser, sql_1.query)
    .delete("/upload", user_1.decode, upload_1.deleteUploadedFile)
    .post("/upload/:idWork", user_1.decode, multipartBody, upload_1.upload)
    .post("/upload", user_1.decode, multipartBody, upload_1.upload)
    .get("/preview", user_1.decode, upload_1.preview)
    .get("/download", user_1.decode, upload_1.download);
let index = (ctx) => {
    ctx.type = "html";
    ctx.body = (0, fs_1.createReadStream)(`../frontend/build/index.html`);
};
exports.index = index;
