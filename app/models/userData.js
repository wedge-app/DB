var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    id: String,
    pwd: String,
    name: String, // 이름
    tel: String,

    user_img: String, // 프로필이미지
    user_img_back: String, // 프로필배경이미지
    user_gender: { // 성별 (0:선택사항없음 1:남자 2:여자)
        type: Number,
        default: 0
    },
    user_education: String, // 학교
    user_major: String, // 전공
    user_location: [], // 위치
    user_field: [], // 관심직무
    user_email: String, // 이메일
    user_introduction: String, // 소개
    user_history: [], // 활동 이력
    user_evaluation: { // 받은 평가
        communicative: Number, // 소통이 원활해요
        trusted: Number, // 신뢰할 수 있어요
        kind: Number, // 친절하고 매너가 좋아요
        hardworker: Number, // 성실하고 열정적이에요
        competent: Number // 기대이상의 퍼포먼스를 보여줘요
    },
});

var UserData = mongoose.model('UserDatas', userDataSchema);
module.exports = UserData;