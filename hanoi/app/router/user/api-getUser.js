
module.exports = function (app, user) {
  app.get('/user/get_user', (req, res) => {
    user.find({}, (err, rs) => {
      if (rs.length != 0) {
        let result = {
          code: 1000,
          message: "OK",
          data: rs,
        }
        return res.json(result);
      }
      else {
        let result = {
          code: 9995,
        }
        return res.json(result);
      }

    })
});
}