const Shift = require("../models/shift.model");
const express = require("express");
const router = express.Router();

router.post("/", async (request, response, next) => {
  try {
    console.log(request.body, " log req.body");
    const newShift = await Shift.create(request.body);
    response.status(201).json({
      status: { code: 201, message: `Shift created` },
      data: newShift,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get("/", async (request, response) => {
  try {
    const allShifts = await Shift.find({});
    response.json({
      status: { code: 200, message: `All shifts retrieved` },
      data: allShifts,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

/* TODO when deleting by ID, getting that ID will still return 200 with null data.
{
    "status": {
        "code": 200,
        "message": "Shift retrieved"
    },
    "data": null
}
*/

router.get("/:id", async (request, response) => {
  try {
    const foundShift = await Shift.findById(request.params.id);
    response.json({
      status: { code: 200, message: `Shift retrieved` },
      data: foundShift,
    });
  } catch (error) {
    response.status(500).json({ message: `ID not found` });
  }
});

router.put("/:id", async (request, response) => {
  try {
    const updatedShift = await Shift.findByIdAndUpdate(
      request.params.id,
      request.body,
      { new: true }
    );
    response.json({
      status: { code: 200, message: `Shift updated` },
      data: updatedShift,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const deletedShift = await Shift.findByIdAndDelete(request.params.id);
    response.json({
      status: { code: 200, message: `Shift deleted` },
      data: deletedShift,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

module.exports = router;
