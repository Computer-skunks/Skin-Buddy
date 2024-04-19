const SkinStorage = require("./skinStorage");

class Skin{
    constructor(body){
        this.body = body
    }

    //비우만 테스트 결과 저장 및 수정
    baumanTest(){
        const client = this.body
        try {
            SkinStorage.baumanTest(client.skinType, client.oilyScore, client.resistanceScore, 
                                   client.non_pigmentScore, client.tightScore, client.userId)
            return {success: true, message: "피부 유형 저장 성공", property: 200}
        } catch {
            return {success: false, message: "에러 발생", property: 404}
        }

    }

}

module.exports = Skin;