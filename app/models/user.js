var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    id: { // 아이디
        type: String,
        unique: true
    },
    pwd: String, // 비밀번호
    name: String, // 이름
    tel: String // 전화번호
});

var User = mongoose.model('Users', userSchema);
module.exports = User;