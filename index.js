var express = require("express");
var app = express();

const cors = require("cors");
app.use(cors());

// app.get ('/', function(req, res){
//     res.send("hello"); //outputing to browser
// });

// ROOT API
app.get("/", function (req, res) {
  
  res.send(seko); //outputing to browser
});


let seko = [
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
app.get("/projects", function (req, res) {
  
  res.send(seko); //outputing to browser
});

let Testimonies = [
    {name:"Godwin Dzvapatsva",
    image:"https://i.postimg.cc/NfN9D8Nm/Godwin.jpg",
    statement:"Based on my interactions with her in class, I am confident that Nomvuyiseko can meet expectationsof an organisation if given opportunity to express herself. I recommend her-Godwin Head of Curriculum and Learning."
},
{
    name:"Azabenathi Pupuma",
    image:"https://i.postimg.cc/Ghh94MFG/Azabenathi.jpg",
    statement:"Seko is smart, and a fast learner. Her sense of style is aestheticallypleaseing and it translates in the way she designs her websites,she designs beautifully."
},
{
    name:"Seth Kleynhans",
    image:"https://i.postimg.cc/dtddXmqv/Seth3.jpg",
    statement:"Very creative and good with with Front end. She has a lovely personality and great workethic.She's fun to work with."
},
{
    name:"Reese Abrahims",
    image:"https://i.postimg.cc/PxkQ33wg/Reese4.jpg",
    statement:"Seko has done a fantastic job overall. Thoughtful and high impact design work with outstanding attention to detail."
},
{
    name:"Jason Wandrag",
    image:"https://i.postimg.cc/0QnPxsH3/Jason.png",
    statement:"Nomvuyiseko seems to show a lot of creativity in my class. I love the effort she puts forth whenever she participates in the classroom. It's nice to see her well-behaved in the classroom. With the right guidance, Nomvuyiseko will do well."
},
{
    name:"Kagiso Mphayi",
    image:"https://i.postimg.cc/W4R2wSk9/mphayi-min.jpg",
    statement:"I find her as a conscientious and very hard-working professional. She manages her time well and she is always willing to help the next person."
},

];

app.get("/testimonials", function (req, res) {
    res.send(Testimonies)
})
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



