const ManagerStorage = require("./managerStorage");

class Manager{
    constructor(body){
        this.body = body
    }

    //관리자 리스트 반환 (+검색)
    async managerList(){
        const client = this.body
        try{
            var list = []
            //전체 리스트 조회일 경우 검색값이 all
            if (client.name=='all') list = await ManagerStorage.managerList() 
            //특정 관리자의 이름으로 검색
            else list = await ManagerStorage.managerFind(client.name)

            return{list, success:true, message:"관리자 검색 성공", property:200}
        }catch{
            return {success: false, message: "에러 발생", property: 404}
        }
    }

    //관리자 정보 추가
    async managerCreate(){
        const client = this.body
        try{
            //추가 정보 중복 여부 확인
            var idCheck = await ManagerStorage.checkId(client.managerId)
            var telCheck = await ManagerStorage.checkTel(client.tel)
            if(idCheck[0]==undefined) idCheck=true //중복되지 않음
            else idCheck=false
            if(telCheck[0]==undefined) telCheck=true //중복되지 않음
            else telCheck=false

            if(idCheck==true && telCheck==true){
                ManagerStorage.managerCreate(client.managerId, client.psword, client.name, client.tel)
                return {success:true, message: "관리자 등록 성공", property: 200}    
            }
            else if(idCheck ==false){
                return {success:false, message: "이미 사용 중인 아이디 입니다.", property: 304}    
            }
            else if(telCheck ==false){
                return {success:false, message: "이미 등록된 전화번호 입니다.", property: 304}    
            }
            
        }catch{
            return {success: false, message: "에러 발생", property: 404}
        }
    }

    //관리자 정보 수정
    async managerUpdate(){
        const client = this.body
        try {
            //다른 관리자 정보 수정은 최고 관리자(코드:0)만 수행 가능하므로 관리자 코드 조회
            var data = await ManagerStorage.managerData(client.loginManagerId)
            var codCheck = data.code

            if (codCheck==0 || client.loginManagerId==client.managerId){
                //수정 정보 중복 여부 확인
                var data = await ManagerStorage.managerData(client.managerId)
                var pastTel = data.tel //변경 여부 확인을 위한 과거 전화번호

                var telCheck = await ManagerStorage.checkTel(client.tel)
                if(telCheck[0]==undefined) telCheck=true //중복되지 않음
                else if(client.tel == pastTel) telCheck=true //변경하지 않음
                else telCheck = false //중복

                if(telCheck ==false){
                    return {success:false, message: "이미 등록된 전화번호 입니다.", property: 304}    
                }else{
                    ManagerStorage.managerUpdate(client.managerId, client.name, client.tel)
                    return {success:true, message: "관리자 정보 수정 성공", property: 200}    
                }
            }else{
                return {success:false, message: "권환이 없습니다", property: 1006}    
            }
        } catch {
            return {success: false, message: "에러 발생", property: 404}
        }
    }

    //관리자 정보 삭제
    async managerDelete(){
        const client = this.body
        try {
            //다른 관리자 정보 삭제는 최고 관리자(코드:0)만 수행 가능하므로 관리자 코드 조회
            var data = await ManagerStorage.managerData(client.loginManagerId)
            var codCheck = data.code

            if (codCheck==0 ){
                ManagerStorage.managerDelete(client.managerId)
                return {success:true, message: "관리자 정보 삭제 성공", property: 200}    
            }else{
                return {success:false, message: "권환이 없습니다", property: 1006}    
            }
        } catch{
            return {success: false, message: "에러 발생", property: 404}
        }
    }

    //관리자 비밀번호 수정
    async managerPswordUpdate(){
        const client = this.body
        try {
            //비밀번호 수정을 위해서 기존 비밀번호로 인증
            var data = await ManagerStorage.managerData(client.managerId)
            var managerPW = data.psword 

            if (managerPW == client.psword){
                ManagerStorage.managerPswordUpdate(client.managerId, client.newPsword)
                return {success:true, message: "비밀번호 수정 성공", property: 200}    
            }
            else{
                return {success:false, message: "비밀번호가 올바르지 않습니다.", property: 301}    
            }
        } catch (err){
            console.log(err)
            return {success: false, message: "에러 발생", property: 404}
        }
    }

}

module.exports = Manager