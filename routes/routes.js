const express = require("express");
const User = require("../models/model");
const router = express.Router();


var userHandlers = require("../controllers/userController.js");

//sign
/**
 * @swagger
 * /auth/sign:
 *   post:
 *     summary: login
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email      
 *         schema:
 *           type: string
 *         required: true
 *         description: The get User
 *     responses:
 *       200:
 *         description: Login successfully
 *         contens:
 *           application/json:
 *             schema: "User"
 *       404:
 *         description: Login was not found
 */
router.route("/auth/sign").post(userHandlers.sign_in);
//register
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: register
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: email      
 *         schema:
 *           type: string
 *         required: true
 *         description: The get User
 *     responses:
 *       200:
 *         description: register successfully
 *         contens:
 *           application/json:
 *             schema: "User"
 *       404:
 *         description: register was not found
 */
router.route("/auth/register").post(userHandlers.register);
//get All User
/**
 * @swagger
 * /auth/getAll:
 *   get:
 *     summary: get All User
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The get User
 *     responses:
 *       200:
 *         description: The get User successfully
 *         contens:
 *           application/json:
 *             schema: "User"
 *       404:
 *         description: The get User was not found
 */
router.route("/auth/getAll").get(userHandlers.loginRequired,userHandlers.getUserRequired);
//Get by ID Method
/**
 * @swagger
 * /auth/getOne/:id:
 *   get:
 *     summary: Get by ID Method
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The Userdescription by id
 *         contens:
 *           application/json:
 *             schema:  "User"
 *       404:
 *         description: The User was not found
 */
router.route("/auth/getOne/:id").get(userHandlers.loginRequired,userHandlers.getByIDRequired);
//Update by Id
/**
 * @swagger
 * /auth/update/:id:
 *   put:
 *     summary: Get by ID Method
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The update by id
 *         contens:
 *           application/json:
 *             schema:  "User"
 *       404:
 *         description: The update User was not found
 */
router.route("/auth/update/:id",).put(userHandlers.loginRequired,userHandlers.updateByIDRequired);
//Delete by Id
/**
 * @swagger
 * /auth/delete/:id:
 *   delete:
 *     summary: Get by ID Method
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     responses:
 *       200:
 *         description: The delete by id
 *         contens:
 *           application/json:
 *             schema:  "User"
 *       404:
 *         description: The delete User was not found
 */
router.route("/auth/delete/:id",).delete(userHandlers.loginRequired,userHandlers.deleteByIDRequired);
module.exports = router;
