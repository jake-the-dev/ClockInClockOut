// User CRUD
const User = require("../models/user.model");
const router = require("express").Router();

router.route("/new").post((request, response) => {
  const newUser = new User(request.body);

  newUser
    .save()
    .then((user) => response.json(user))
    .catch((err) => response.status(400).json(`Error! ${err}`));
});

router.route("/").get();

router.route("/delete/:id").delete();

router.route("/update/:id").put();

module.exports = router;
