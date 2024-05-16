const { contratos } = require('../models/contratos');

module.exports.listar = () => {
    const result = contratos.find({});
    return result;
}

module.exports.consultar = id => {
    const result = contratos.findOne({ _id: id }).exec();
    return result;
}

module.exports.listByEntidade = entidade => {
    const result = contratos.find({ NIPC_entidade_comunicante: entidade }).exec();
    return result;
}

module.exports.listByTipo = tipo => {
    const result = contratos.find({ tipoprocedimento: tipo }).exec();
    return result;
}

module.exports.listEntidadesOrdered = () => {
    const result = contratos.distinct('entidade_comunicante').sort().exec();
    return result;
}

module.exports.listTiposOrdered = () => {
    const result = contratos.distinct('tipoprocedimento').sort().exec();
    return result;
}

module.exports.addContrato = contrato => {
    return contratos.create(contrato).then(
        data => {
            return data;
        }
    ).catch(
        err => {
            return err;
        }
    );
}

module.exports.removeContrato = id => {
    return contratos.deleteOne({ _id: id }).then(
        data => {
            return data;
        }
    ).catch(
        err => {
            return err;
        }
    );
}

module.exports.updateContrato = (id, contrato) => {
    return contratos.updateOne({ _id: id }, contrato).then(
        data => {
            return data;
        }
    ).catch(
        err => {
            return err;
        }
    );
}