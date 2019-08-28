const fs = require('fs');
const express = require('express');
const axios = require('axios');

const { createBundleRenderer } = require('vue-server-renderer');

const bundleRenderer = createBundleRenderer(
  require('./dist/vue-ssr-bundle.json'),
  {
    template: fs.readFileSync('./index.html', 'utf-8')
  }
);

const app = express();
const port = process.env.PORT || 8080;

app.use('/dist', express.static('dist'));

app.get('/test', (req, res) => {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
  .then(response => {

    console.log(res.data)
    res.send(response.data);
  })
  .catch(err => res.send(err))
})

app.get('*', (req, res) => {
  bundleRenderer
    .renderToStream({url: req.path})
    .pipe(res);
});

app.listen(port, () => console.log(`Server running on port : ${port}`));