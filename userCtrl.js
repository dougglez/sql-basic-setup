module.exports = {

  getAllUsers: function(req, res, next) {
    const db = req.app.get('db');
    db.get_users()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        console.log(error);
        res.send(error);
      })
  }

};