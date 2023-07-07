"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preview = exports.download = exports.upload = exports.deleteUploadedFile = void 0;
const fs = require("fs");
const path_1 = require("path");
async function deleteUploadedFile(ctx) {
    // console.log({ file: ctx.request.query.path });
    let { path } = ctx.request.query;
    fs.promises.unlink(path).catch(console.error);
    ctx.body = { status: 'OK' };
}
exports.deleteUploadedFile = deleteUploadedFile;
async function upload(ctx) {
    // console.log({ files: ctx.request.files });
    if (ctx.request.files.people)
        return await uploadSupport(ctx);
    else if (ctx.request.files.support)
        return await uploadSupport(ctx);
}
exports.upload = upload;
async function download(ctx) {
    try {
        let { name, path } = ctx.query;
        if (name.length - name.lastIndexOf('.') !== path.length - path.lastIndexOf('.')) {
            // adaug extensia la nume dacă aceasta nu există
            name += path.toString().substring(path.lastIndexOf('.'));
        }
        ctx.set('Content-disposition', `attachment; filename=${name}`);
        ctx.set('Content-type', "multipart/x-zip");
        ctx.body = fs.createReadStream((0, path_1.join)(process.cwd(), path));
    }
    catch (err) {
        console.log(`#ERROR upload.ts -> download\n ${err.message}`);
    }
}
exports.download = download;
async function preview(ctx) {
    let { name, path } = ctx.query;
    ctx.set(`Content-Disposition`, `inline; filename=${name}.pdf`);
    ctx.set('Content-type', "application/pdf");
    ctx.body = fs.createReadStream((0, path_1.join)(process.cwd(), path));
}
exports.preview = preview;
async function uploadSupport(ctx) {
    try {
        let files = ctx.request.files.support;
        files = Array.isArray(files) ? files : [files];
        ctx.body = { files };
    }
    catch (err) {
        console.log(`#ERROR upload.ts -> uploadSupport ${err.message}`);
        await ctx.render('error', { message: err.message });
    }
}
