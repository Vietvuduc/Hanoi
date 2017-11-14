

module.exports = function (app, user) {
  app.post('/user/getUser', (req, res) => {
    user.find({ id_user: req.body.id_user }, (err, rs) => {
      if (rs.length != 0) {
        let result = {
          code: 1000,
          message: "OK",
          data: rs[0],
        }
        return res.json(result);
      }
      else {
        let result = {
          code: 9995,
          message: "User is not validated.",
        }
        return res.json(result);
      }

    });
});
}