const express = require("express");
const User = require("../models/model");
const router = express.Router();


var userHandlers = require("../controllers/userController.js");

//sign
router.route("/auth/sign").post(userHandlers.sign_in);
//register
router.route("/auth/register").post(userHandlers.register);
//get All User
router.route("/auth/getAll").get(userHandlers.loginRequired,userHandlers.getUserRequired);
//Get by ID Method
router.route("/auth/getOne/:id").get(userHandlers.loginRequired,userHandlers.getByIDRequired);
//Update by Id
router.route("/auth/update/:id",).put(userHandlers.loginRequired,userHandlers.updateByIDRequired);
//Delete by Id
router.route("/auth/delete/:id",).delete(userHandlers.loginRequired,userHandlers.deleteByIDRequired);
module.exports = router;
