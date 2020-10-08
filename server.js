const path = require('path');
const express = require('express');
// const db = require('../database/index.js');
const axios = require('axios');

const DIST_DIR = path.join(`${__dirname}/public`);

const port = 3001;
const app = express();

app.use(express.static(DIST_DIR));

app.get('/:pid/getGalleries', (req, res) => {
  axios.get('http://localhost:1420/1/getGalleries')
    .then(gallery => {
      res.status(200).send(gallery.data);
      // console.log('this is response', gallery.data);
    })
    .catch(err => {
      res.status(400).send('fail')
      console.error('[FAILED] proxy get galleries: ', err);
    })
})

app.get('/:pid/product-details', (req, res) => {
  axios.get('http://localhost:8080/1/product-details')
    .then(product => {
      res.status(200).send(product.data);
    })
    .catch(err => {
      res.status(400).send('fail')
      console.error('[FAILED] proxy get product: ', err);
    })
})

app.get('/:pid/recommendation/getInfo', (req, res) => {
  axios.get('http://localhost:1234/1/recommendation/getInfo')
    .then(recommend => {
      res.status(200).send(recommend.data);
    })
    .catch(err => {
      res.status(400).send('fail')
      console.error('[FAILED] proxy get recommend: ', err);
    })
})

app.get('/:pid/reviews', (req, res) => {
  axios.get('http://localhost:3000/1/reviews')
    .then(review => {
      res.status(200).send(review.data);
    })
    .catch(err => {
      res.status(400).send('fail')
      console.error('[FAILED] proxy get review: ', err);
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});



