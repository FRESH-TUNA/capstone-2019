const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
.then(()=>{
    const server = express();

    // 커스텀 라우터 전후 비교 시 아래 부분을 주석 처리 후 확인해 보세요
    server.get('/newletter/:componentState', (req, res) => {
        const page = '/newletter';
        const params = {componentState: req.params.componentState}
        app.render(req, res, page, params)
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(9090, (err) => {
        if(err) throw err;
        console.log("> Ready on Server Port: 9090")
    })
})
.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})