const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do credito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do debito']}
})

const debtSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do debito']},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do debito']},
    status: {type: String, required: false, uppercase: true,
        enum:['PAGO', 'PENDENTE', 'AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Informe o nome do Ciclo de pagamento']},
    month: {type: Number, min: 1, max: 12, required: [true, 'Informe o mes do Ciclo de Pagamento']},
    year: {type: Number, min: 1970, max:2099, required: [true, 'Informe o ano do Ciclo de Pagamento']},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)