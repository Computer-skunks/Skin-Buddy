//router 모듈
const express = require('express');
const router = express.Router();

// 컨트롤러 호출
const ctroler = require("./ctrl"); 

//db 호출
const db = require('../database/connect.js').db


//URL 분류기
/*------------------------------------------사용자---------------------------------------------*/
router.post('/user/login', ctroler.userContrl.userLogin) // 사용자 로그인
router.post('/user/create', ctroler.userContrl.userCreate) // 사용자 서비스 가입
router.post('/user/find/id', ctroler.userContrl.userFindId) //사용자 아이디 찾기
router.post('/user/find/psword', ctroler.userContrl.userFindPW) //사용자 비밀번호 찾기

router.post('/user/home/profile', ctroler.userContrl.userHomeProfile) //홈페이지 사용자 프로필 반환
// router.get('/user/home/advertise ') //홈페이지 광고 사진 리스트

// router.post('/user/skin/classification') //트러블 유형 분석
// router.post('/user/skin/classification/photo') //트러블 유형 분석 사진 반환

// router.post('/user/skin/detection') //트러블 호전도 분석
// router.post('/user/skin/detection/photo') //트러블 호전도 분석 사진 반환

router.put('/user/skin/bauman', ctroler.skinControl.baumanTest)//바우만 테스트 결과 저장 및 수정

//P /user/skin/record/list
//P /user/skin/record/select
//D /user/skin/record/delete

router.post('/user/set', ctroler.userContrl.setPageProfile) //환경설정 페이지 사용자 프로필 반환
router.post('/user/profile', ctroler.userContrl.userProfile) //프로필 변경 페이지 사용자 프로필 반환
router.put('/user/profile/update', ctroler.userContrl.profileUpdate) //사용자 프로필 수정
router.get('/user/notice/list',ctroler.communicationControl.noticeList) //공지사항 리스트 반환
router.get('/user/terms',ctroler.communicationControl.terms) //이용약관 반환
router.post('/user/question/list',ctroler.communicationControl.QAList) // Q&A 리스트 반환
router.post('/user/question/create',ctroler.communicationControl.QAcreate) //Q&A 작성
router.put('/user/change/psword', ctroler.userContrl.userPswordUpdtae) //사용자 비밀번호 수정
router.delete('/user/delete', ctroler.userContrl.userDelete) //사용자 계정 삭제



/*------------------------------------------관리자---------------------------------------------*/
router.get('/manager/home/user',ctroler.userContrl.userSkinTypeCount)  //사용자 수 및 피부유형 반환

router.post('/manager/list',ctroler.managerContrl.managerList) //관리자 리스트 반환 (+검색)
router.post('/manager/create',ctroler.managerContrl.managerCreate) //관리자 정보 추가
router.put('/manager/update',ctroler.managerContrl.managerUpdate) //관리자 정보 수정
router.delete('/manager/delete',ctroler.managerContrl.managerDelete)//관리자 정보 삭제
router.put('/manager/psword',ctroler.managerContrl.managerPswordUpdate)//관리자 비밀번호 수정 (자기 자신 비밀번호)

router.post('/manager/user/list', ctroler.userContrl.userList) //사용자 리스트 반환 (+검색)
router.delete('/manager/user/delete',ctroler.userContrl.userDeleteByM)//관리자 정보 삭제

router.post('/manager/notice/create',ctroler.communicationControl.noticeCreate) //공지사항 작성
router.put('/manager/notice/update',ctroler.communicationControl.noticeUpadate) //공지사항 수정
router.delete('/manager/notice/delete',ctroler.communicationControl.noticeDelete) //공지사항 삭제
router.put('/manager/terms/update',ctroler.communicationControl.termsUpadate) //이용약관 수정
router.get('/manager/question/list',ctroler.communicationControl.questionList) //Q&A 리스트 반환
router.post('/manager/question/answer',ctroler.communicationControl.questionAnswer) //Q&A 답변



module.exports = router;