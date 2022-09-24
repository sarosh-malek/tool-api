const UserModel = require("../model/userModel");

const responseHandler = (code, message, res) => {
  res.status(code).json({
    data: message,
  });
};

const userControllers = {
  async login(req, res) {
    try {
      const user = await UserModel.findOne(
        {
          $or: [{ userName: req.body.userName }, { email: req.body.userName }],
          password: req.body.password,
        },
        {}
      );
      if (user) {
        responseHandler(200, { email: user.email }, res);
      } else {
        responseHandler(
          400,
          { error: "user name or password is incorrect" },
          res
        );
      }
    } catch (err) {
      responseHandler(400, { error: err.errmsg }, res);
    }
  },
  async register(req, res) {
    try {
      const user = await UserModel.create(req.body);
      console.log(user);
      responseHandler(200, { userName: user.userName, email: user.email }, res);
    } catch (err) {
      if (err.code === 11000) {
        responseHandler(
          400,
          { error: "userName or email already exists" },
          res
        );
      } else {
        responseHandler(400, { error: err._message }, res);
      }
    }
  },
};

module.exports = userControllers;
