var express = require("express");
var app = express();

const cors = require("cors");
app.use(cors());



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

app.get("/", function (req, res) {
  
    res.send(Testimonies); //outputing to browser
  });
  app.listen(4200);
  