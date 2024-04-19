//express 모듈 
const express = require('express');
const app = express();

//view 모듈 
app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

const cors = require('cors')

app.use(cors())

// body 파서 모듈
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // JSON 형식의 본문 파싱을 위해 추가

//라우터 호출
const route = require('./src/route/route.js')
app.use("/", route);

//서버 요청 수행
app.listen(3000, () => console.log('서버 동작 중'));