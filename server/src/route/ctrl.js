const { baumanTest } = require('../models/skinStorage');
const User = require('../models/user');
const Skin = require('../models/skin');
const Communication = require('../models/communication')
const Manager = require('../models/manager')

const userContrl = {
    //사용자 로그인
    userLogin : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.userLogin();
        return res.json(response)
    },

    //사용자 서비스 가입
    userCreate : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.userCreate();
        return res.json(response)
    },

    //사용자 아이디 찾기
    userFindId : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.userFindId();
        return res.json(response)
    },

    //사용자 비밀번호 찾기
    userFindPW : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userFindPW();
        return res.json(response)
    },

    //홈페이지 사용자 프로필 반환
    userHomeProfile : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userHomeProfile();
        return res.json(response)
    },

    //환경설정 페이지 사용자 닉네임 반환
    setPageProfile : async (req, res)=> {
        const user = new User(req.body);
        const response = await user.setPageProfile();
        return res.json(response)
    },

    //사용자 프로필 반환
    userProfile : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userProfile();
        return res.json(response)
    },

    //사용자 프로필 수정
    profileUpdate : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.profileUpdate();
        return res.json(response)
    },

    //사용자 비밀번호 변경
    userPswordUpdtae : async (req, res) =>{
        const user = new User(req.body);
        const response = await user.userPswordUpdtae();
        return res.json(response)
    },

    //사용자 계정 삭제
    userDelete : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userDelete();
        return res.json(response)
    },

    //사용자 수 및 피부유형 반환
    userSkinTypeCount : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userSkinTypeCount();
        return res.json(response)
    },

    // 사용자 정보 조회 (관리자용)
    userList : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userList();
        return res.json(response)
    },

    // 사용자 정보 삭제 (관리자용)
    userDeleteByM : async (req, res)=>{
        const user = new User(req.body);
        const response = await user.userDeleteByM();
        return res.json(response)
    }
}

const skinControl = {
    //비우만 테스트 결과 저장 및 수정
    baumanTest : async (req, res)=>{
        const skin = new Skin(req.body);
        const response = await skin.baumanTest();
        return res.json(response)
    }
}

const communicationControl = {
    //공지사항 리스트 반환
    noticeList : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.noticeList();
        return res.json(response)
    },

    //이용 약관 반환
    terms : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.terms();
        return res.json(response)
    },

    //Q&A 작성
    QAcreate : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.QAcreate();
        return res.json(response)
    },

    //Q&A 조회
    QAList : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.QAList();
        return res.json(response)
    },

    //공지사항 작성 (관리자용)
    noticeCreate : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.noticeCreate();
        return res.json(response)
    },

    //공지사항 수정 (관리자용)
    noticeUpadate : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.noticeUpadate();
        return res.json(response)
    },

    //공지사항 삭제 (관리자용)
    noticeDelete : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.noticeDelete();
        return res.json(response)
    },

    //이용약관 수정 (관리자용)
    termsUpadate : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.termsUpadate();
        return res.json(response)
    },

    //Q&A 리스트 반환 (관리자용)
    questionList : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.questionList();
        return res.json(response)
    },

    //Q&A 답변 (관리자용)
    questionAnswer : async (req, res)=>{
        const communication = new Communication(req.body);
        const response = await communication.questionAnswer();
        return res.json(response)
    },
}

const managerContrl = {
    //관리자 리스트 반환 (+검색)
    managerList : async (req, res)=>{
        const manager = new Manager(req.body);
        const response = await manager.managerList();
        return res.json(response)
    },

    //관리자 정보 추가
    managerCreate : async (req, res)=>{
        const manager = new Manager(req.body);
        const response = await manager.managerCreate();
        return res.json(response)
    },

    //관리자 정보 수정
    managerUpdate : async (req, res)=>{
        const manager = new Manager(req.body);
        const response = await manager.managerUpdate();
        return res.json(response)
    },

    //관리자 정보 삭제
    managerDelete : async (req, res)=>{
        const manager = new Manager(req.body);
        const response = await manager.managerDelete();
        return res.json(response)
    },

    //관리자 비밀번호 수정 
    managerPswordUpdate : async (req, res)=>{
        const manager = new Manager(req.body);
        const response = await manager.managerPswordUpdate();
        return res.json(response)
    }


}


module.exports = {userContrl, skinControl, communicationControl, managerContrl}