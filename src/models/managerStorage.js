const { reduce, reject } = require("async");
const db = require("../database/connect.js");

class ManagerStorage {
    //전체 관리자 리스트 반환
    static managerList(){
        return new Promise((resolve, reject)=>{
            const query = `select name, managerId, tel from manager`;
            db.query(query, (err, data) =>{
                if(err) reject(`${err}`)
                resolve(data);     
            })         
        })
    }

    //특정 관리자 검색 (이름으로)
    static managerFind(name){
        return new Promise((resolve, reject)=>{
            const query = `select name, managerId, tel from manager where name =?`;
            db.query(query,[name], (err, data) =>{
                if(err) reject(`${err}`)
                resolve(data);     
            })         
        })
    }

    //아이디 중복 확인
    static checkId(managerId){
        return new Promise((resolve, reject)=>{
            const query = "select managerId from manager where managerId = ?";
            db.query(query ,[managerId], (err, data) =>{
                if(err) reject(`${err}`)
                resolve(data)
            })         
        })
    }

    //전화번호 중복 확인
    static checkTel(tel){
        return new Promise((resolve, reject)=>{
            const query = "select tel from manager where tel = ?";
            db.query(query ,[tel], (err, data) =>{
                if(err) reject(`${err}`)
                resolve(data)
            })         
        })
    }

    //관리자 정보 추가
    static managerCreate(managerId, psword, name, tel){
        const query = 'insert into manager values (?, ?, ?, ?, 01)'
        db.query(query, [managerId, psword, name, tel])
    }

    //관리자 정보 반환
    static managerData(managerId){
        return new Promise((resolve, reject)=>{
            const query = "select * from manager where managerId = ?";
            db.query(query ,[managerId], (err, data) =>{
                if(err) reject(`${err}`)
                resolve(data[0])
            })         
        })
    }

    //관리자 정보 수정
    static managerUpdate(managerId, name, tel){
        const query = 'update manager set name=?, tel=? where managerId=?'
        db.query(query, [name, tel, managerId])
    }

    //관리자 정보 삭제
    static managerDelete(managerId){
        const query = 'delete from manager where managerId=?'
        db.query(query, [managerId])
    }

    //관리자 비밀번호 수정
    static managerPswordUpdate(managerId, psword){
        const query = 'update manager set psword=? where managerId=?'
        db.query(query, [psword, managerId])

    }
}

module.exports = ManagerStorage;