const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.Number.min = 
    "O valor '{VALUE}' informado no campo '{PATH}' e menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max =
    "O valor '{VALUE}' informado no campo '{PATH}' e maior que o limite maximo de '{MAX}'."
mongoose.Error.messages.String.enum =
    "O '{VALUE}' informado nao e valido para o atributo '{PATH}'."