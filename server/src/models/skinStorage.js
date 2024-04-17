const { reduce, reject } = require("async");
const db = require("../database/connect.js");

//비우만 테스트 결과 저장 및 수정
class SkinStorage {
    static baumanTest(skinType, oilyScore, resistanceScore, non_pigmentScore, tightScore, userId){
        const query = `update userTypeScore set skinType=?, 
                       oilyScore=?, resistanceScore=?, non_pigmentScore=?, tightScore=? 
                       where userId=?;`
        db.query(query, [skinType, oilyScore, resistanceScore, non_pigmentScore, tightScore, userId])
        const query2 = 'update user set skinType=? where userId =?'
        db.query(query2,[skinType, userId])
    }
}

module.exports = SkinStorage;