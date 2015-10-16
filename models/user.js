var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = new Schema ({
    email: {
        type: String,
        required: "Debes ingresar un email!",
        validate: {
            validator: function (e) {
                return /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(e);
            },
            message: "Debes ingresar un email válido"
        }
    },
    color: {
        type: String,
        required: "Debes seleccionar un color",
        validate: {
            validator: function (v) {
                return /\b(verde|azul)$/i.test(v);
            },
            message: "Debes seleccionar verde o azul"
        }
    },
    number: {
        type: Number,
        required: "Debes seleccionar un número (1, 2 o 3)",
        min: 1,
        max: 3
    }
});

module.exports = mongoose.model('User', User);
