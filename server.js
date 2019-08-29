//express server
const express = require('express');
const server = express();
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const port = process.env.PORT || 8080;
//obtain bundle
const bundle =  require('./dist/server.bundle.js');
//get renderer from vue server renderer
const renderer = require('vue-server-renderer').createRenderer({
    //set template
    template: fs.readFileSync('./index.html', 'utf-8')
});

server.use('/dist', express.static(path.join(__dirname, './dist')));

//start server
server.get('/test', (req, res) => {
  axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${req.query.liquor}`)
  .then(response => {
    res.send(response.data.drinks);
  })
  .catch(err => res.send(err))
})


server.get('*', (req, res) => { 
    
    bundle.default({ url: req.url }).then((app) => {    
        //context to use as data source
        //in the template for interpolation
        const context = {
            title: 'Cocktail'
        };

        renderer.renderToString(app, context, function (err, html) {   
            if (err) {
              if (err.code === 404) {
                res.status(404).end('Page not found')
              } else {
                res.status(500).end('Internal Server Error')
              }
            } else {
              res.end(html)
            }
          });        
    }, (err) => {
        console.log(err);
    });  
});  

server.listen(port, () => console.log(`The server is runnig on : ${port}`));