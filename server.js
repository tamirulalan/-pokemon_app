//require the express module
const express = require('express');
const { createEngine } = require('express-react-views');
const app = express();
const port = 3000;

const pokemon = require('./models/pokemon.js');
//app.set('views', './views') 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
//sending a response in diffrent forms
app.get('/', (req,res)=>{
  res.send('Welcome to the Pokemon App!')
})
//checking as my server readsmy database
// app.get('/pokemon', (req,res)=>{
//     res.send(pokemon)
//   })

  app.get(`/pokemon`, (req,res)=>{
    res.render(`Index`, {pokemon:pokemon})
})

app.get(`/pokemon/:id`, (req,res)=>{
  const {id} = req.params
  res.render(`Show`, {pokemon:pokemon[id]})
})


app.listen(port,() => {
    console.log('listening on port' , port);
});