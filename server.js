require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const pokemon = require("./models/pokemon.js");


// Set up middleware

app.use((req, res, next) => {
  console.log("I run for all routes");
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());


// Setting up Mongoose
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// set the routers 
//at local host

app.get('/', (req, res) => {
  res.send('Welcome to the Pokemon App!')
})

// Index
app.get("/pokemon", (req, res) => {
  pokemon.find({}, (error, allpokemon) => {
       res.status(200).render("Index", {
          pokemon: allpokemon
     })  
  })
})

//New  route /pokemon that will send new (pokemon)
app.get('/pokemon/new', (req, res) => {
  res.render("New")
})

// DELETE

//Create
app.post("/pokemon", (req, res) => {
  pokemon.create(req.body, (error, createdpokemon) => {
      if(!error) {
          res.status(200).redirect("/pokemon")
      } else {
          res.status(400).send(error)
      }
  })
})

// Show
app.get("/pokemon/:indexOfpokemonArray", function (req, res) {
  pokemon.findById(req.params.indexOfpokemonArray, (err, foundpokemon) => {
    res.render("Show", {
      pokemon: foundpokemon,
    });
  });
});

app.listen(port, () => {
  console.log("listening");
});