const User = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response, next) => {
  try {
    console.log(request.body, " log req.body");
    const newUser = await User.create(request.body);
    response.status(201).json({
      status: { code: 201, message: `User created` },
      data: newUser,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const allUsers = await User.find({});
    response.json({
      status: { code: 200, message: `All users retrieved` },
      data: allUsers,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const foundUser = await User.findById(request.params.id);
    response.json({
      status: { code: 200, message: `User retrieved` },
      data: foundUser,
    });
  } catch (error) {
    response.status(500).json({ message: `ID not found` });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.json({
      status: { code: 200, message: `User updated` },
      data: updatedUser,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(request.params.id);
    response.json({
      status: { code: 200, message: `User deleted` },
      data: deletedUser,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
