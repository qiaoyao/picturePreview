// import UserModel from "../models/user";

export default {
  /**
   * 登录
   * @param {*} ctx
   */
  async login(ctx) {
    ctx.body = {
      code: 200,
      msg: "登录成功",
      data: ctx.request.body
    };
  }
};
