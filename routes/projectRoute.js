const express = require("express");
const router = express.Router();

let projects = [
  {
    title: "REACTION TIMER",
    github: "https://github.com/SekoM1/REACTION-TIMER",
    live: "https://sekompofureactiontimer.netlify.app//",
    img: "https://i.postimg.cc/g2VpsKtQ/reaction.png",
    techStacks: `VUE,HTML,CSS`,
  },
  {
    title: "ECOMMERCE WEBSITE",
    github: "https://github.com/SekoM1/eCommerce-Website",
    live: "https://sekoecommercesite.netlify.app//",
    img: "https://i.postimg.cc/nL0cpkJg/ECOMMERCE.png",
    techStacks: `JAVASCRIPT, HTML,CSS`,
  },
  {
    title: "BMI CALCULATOR",
    github: "https://github.com/SekoM1/BMI-CALCULATOR",
    live: "https://sekompofubmicalc.netlify.app/",
    img: "https://i.postimg.cc/1XMLNWW1/BMI.png",
    techStacks: `JAVASCRIPT, HTML, CSS`,
  },
  {
    title: "CALCULATOR",
    github: "https://github.com/SekoM1/JAVASCRIPT",
    live: "https://goofy-khorana-2b322e.netlify.app/",
    img: "https://i.postimg.cc/SKC814mr/calc.png",
    techStacks: `JAVASCRIPT,HTML, CSS`,
  },
  {
    title: "CONTACT FORM",
    github: "https://github.com/SekoM1/contact-form",
    live: "https://hardcore-rosalind-dfc61b.netlify.app/",
    img: "https://i.postimg.cc/90qLJSNH/contact-form.png",
    techStacks: `HTML, CSS`,
  },
  {
    title: "WEBSITE CLONE",
    github: "https://github.com/SekoM1/bootsrap-webdesign",
    live: "https://tender-bohr-cdb86f.netlify.app/",
    img: "https://i.postimg.cc/wBSVPvh1/webcloning.png",
    techStacks: `HTML, BOOTSTRAP, CSS`,
  },
];


router.get("/", (req, res) => {
  res.send(projects);
});



module.exports = router;
