const pageModel = require("../model/pageModel");

const responseHandler = (code, message, res) => {
  res.status(code).json({
    data: message,
  });
};

const pageController = {
  async getPages(req, res) {
    try {
      const page = await pageModel.find({}, { title: 1, subPages: 1, _id: 0 });
      if (page) {
        responseHandler(200, page, res);
      } else {
        responseHandler(400, { error: "No page found" }, res);
      }
    } catch (err) {
      console.log(err);
      responseHandler(400, { error: err.errmsg }, res);
    }
  },
  async addPage(req, res) {
    try {
      await pageModel.create(req.body);
      responseHandler(200, { message: "page added successfully" }, res);
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

module.exports = pageController;
