var express = require('express');
var router = express.Router();
var axios = require('axios');


router.get('/:nipc', function(req, res, next) {
    axios.get('http://localhost:16000/contratos?entidade=' + req.params.nipc)
        .then(dados => {
            var nome_entidade = dados.data[0].entidade_comunicante;
            var NIPC_entidade = req.params.nipc;
            var montanteTotal = 0;
            for (i = 0; i < dados.data.length; i++) {
                montanteTotal += dados.data[i].precoContratual;
            }
            res.render('entidade', { contratos: dados.data , nome_entidade: nome_entidade, NIPC_entidade: NIPC_entidade, montanteTotal: montanteTotal});
        })
        .catch(erro => {
            res.render('error', { error: erro });
        });
}
);

module.exports = router;