const http = require('http') 
const fs = require('fs')


let server = http.createServer((req,res)=>{                     //Создаем сервер
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
    const stream = fs.createReadStream('./website/index.html')                            //Считываем index.html в переменную stream
    stream.pipe(res)  //Отправляем информацию на сервер    (Почастям подгружаем данные) 
    
})

const PORT = 3000
const HOST = 'localhost'

server.listen(PORT, HOST, () => {                                   //Запускаем сервер
    console.log(`Сервер запущен:  http://${HOST}:${PORT}`)
})