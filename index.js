const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const path = require('path')
const PORT = process.env.PORT || 5000
require("dotenv").config();

// instantiate an express app
const app = express();

// make the contact page the first page on the app
app.route("/").get(function (req, res) {
	res.sendFile(process.cwd() + "

