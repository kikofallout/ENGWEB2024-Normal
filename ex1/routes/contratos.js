var express = require('express');
var router = express.Router();
var Contratos = require('../controllers/contratos');

router.get('/contratos', function(req, res) {
    if (req.query.entidade) {
        Contratos.listByEntidade(req.query.entidade)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
    else if (req.query.tipo) {
        Contratos.listByTipo(req.query.tipo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
    }
    else 
        Contratos.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro));
}
);

router.get('/contratos/entidades', function(req, res) {
    Contratos.listEntidadesOrdered()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

router.get('/contratos/tipos', function(req, res) {
    Contratos.listTiposOrdered()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

router.get('/contratos/:id', function(req, res) {
    Contratos.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

router.post('/contratos', function(req, res) {
    Contratos.addContrato(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

router.delete('/contratos/:id', function(req, res) {
    Contratos.removeContrato(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

router.put('/contratos/:id', function(req, res) {
    Contratos.updateContrato(req.params.id, req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro));
}
);

module.exports = router;