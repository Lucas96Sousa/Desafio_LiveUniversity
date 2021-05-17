const {Router} = require('express')
const request = require('request');
const tp = require('tedious-promises')


const routes = new Router;

routes.get('/', (req,res) => {
  res.render('index.ejs', {})
})

routes.post('/insert',  async (req,res) => {
  const { nome, sobrenome, email} = req.body
  var options = {
    'method': 'POST',
    'url': 'http://138.68.29.250:8082',
    'headers': {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'nome':`${nome}`,
      'sobrenome': `${sobrenome}`,
      'email': `${email}`
    }
  };
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
  });
  
 const insert = await tp.sql(`INSERT INTO TABLE tbs_nome  VALUES ( '${nome}', '504' );`)
 .execute()
 .then((results)=> {
   console.log(results[0])
 })


  res.redirect('/')
})




module.exports= routes



