var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('http://localhost:16000/contratos')
    .then(dados => {
      res.render('index', { contratos: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
});

router.get('/:id', function(req, res, next) {
  axios.get('http://localhost:16000/contratos/' + req.params.id)
    .then(dados => {
      res.render('contrato', { contrato: dados.data });
    })
    .catch(erro => {
      res.render('error', { error: erro });
    });
}
);


module.exports = router;
