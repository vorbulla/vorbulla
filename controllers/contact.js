const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Contact = require("../Models/Contact");
exports.postContact = asyncHandler(async (req, res, next) => {
  await Contact.create(req.body);
  res.status(200).json({
    success: true,
  });
});

exports.getContact = asyncHandler(async (req, res, next) => {
  const contact = await Contact.find();
  res.status(200).json({
    success: true,
    data: contact,
  });
});
