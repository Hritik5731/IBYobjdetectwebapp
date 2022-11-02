const mmongoose = require('mongoose');

const User = new mmongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true , unique: true},
        password: {type: String, required: true},
        quote: {type: String},
    },
    {collection: 'user-data'}

)

const model = mmongoose.model('UserData', User)

module.exports= model