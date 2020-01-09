import query from "../config/db";

export default {
  /**
   * 创建新用户
   * @param {string} username
   * @param {string} password
   */
  async create(username, password) {
    const {
      res
    } = await query("insert into user(username, password) values (?,?)", [username, password]);
    return res[0];
  },
  /**
   * 根据用户名查找用户
   * @param {string} username
   */
  async findUserByName(username) {
    const {
      res
    } = await query("select * from user where username = ?", [username]);
    console.log(res);
    return res[0];
  },
  /**
   * 根据用户id查找用户
   * @param {number} userid
   */
  async findUserById(userid) {
    const {
      res
    } = await query("select * from user where userid = ?", [userid]);
    return res[0];
  }
};
