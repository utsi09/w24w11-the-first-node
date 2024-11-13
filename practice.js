const http = require('http')

const server = http.createServer(
    (req,res) => {
        res.writeHead(200, {'Content-Type' : 'application/json'}
    )
    const reponseData = {
        status : 'success',
        message : '안녕하세요',
    }
    res.end(JSON.stringify(reponseData))

    }
)

server.listen(3000,() =>{ console.log('서버실행 포트번호3000')})