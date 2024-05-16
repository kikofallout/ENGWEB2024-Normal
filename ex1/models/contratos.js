const mongoose = require('mongoose');
const { Schema } = mongoose;

const contratoSchema = new Schema({
    _id: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: Number,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
});

var contratos = mongoose.model('contratos', contratoSchema, 'contratos');

module.exports = { contratos };
