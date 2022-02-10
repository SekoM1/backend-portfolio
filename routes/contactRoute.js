const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

router.get("/", (req, res) => res.send({ msg: "send contact using POST" }));

router.post("/", (req, res) => {
  const { name, email, message } = req.body;
  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });
  var mailOptions = {
    from: email,
    to: "seko.n.mpofu@gmail.com",
    subject: "New Message From Portfolio",
    text: `${name} has msesged you saying: ${message}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).send({ mdg: "Email could not be sent" + error });
    } else {
      console.log("email sent" + info.response);
      res.send({ msg: "message sent successfully" });
    }
  });
});

module.exports = router;
