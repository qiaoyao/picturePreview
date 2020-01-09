// import commonModels from "../models/common";

export default {
  async upload(ctx) {
    if (!ctx.request.files.file) {
      return (ctx.body = {
        code: 300,
        msg: "请选择图片"
      });
    }

    // let file = ctx.request.files.file;
    //   let userId = ctx.request.body.userId;
    //   let file = ctx.request.files.file;
    //   // let extname = file.name.slice(file.name.lastIndexOf("."));
    //   let extname = path.extname(file.name);
    //   let filePath = "/upload/IMG_" + userId + "_" + +new Date() + extname;

    //   const readStream = fs.createReadStream(file.path);
    //   const writeStream = fs.createWriteStream(staticPath + filePath);
    //   readStream.pipe(writeStream);

    //   ctx.body = {
    //     status: 200,
    //     message: "",
    //     data: "http://localhost:3000" + filePath
    //   };
    console.log(ctx.request.body);
    console.log(ctx.request.files);
    ctx.body = {
      code: 200,
      data: {
        params: ctx.request.body
      }
    };
  }
};
