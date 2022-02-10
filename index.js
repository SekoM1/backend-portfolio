var express = require("express");
var app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())

//importing projects API //
const projectAPI = require("./routes/projectRoute");
const testimonialsAPI = require("./routes/testimonialsRoute");
const contactAPI = require("./routes/contactRoute");
const path = require("path");

app.use("/projects", projectAPI);
app.use("/testimonials", testimonialsAPI);
app.use("/contact", contactAPI);


const port = process.env.PORT || 6700;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
