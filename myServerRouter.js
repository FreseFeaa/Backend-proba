const http = require('http') 
const fs = require('fs')

//Создаем сервер
let server = http.createServer((req,res)=>{                     
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    // Делаем маршрутизатор
    if(req.url == '/')              //Если страница http://localhost:3000/     
        fs.createReadStream('./website/index.html').pipe(res)  
    else if (req.url == '/about')   //Если страница http://localhost:3000/about
        fs.createReadStream('./website/about.html').pipe(res)
    else                            //Если страница любая другая
        fs.createReadStream('./website/error.html').pipe(res)
})

const PORT = 3000
const HOST = 'localhost'

 //Запускаем сервер
server.listen(PORT, HOST, () => {                                  
    console.log(`Сервер запущен:  http://${HOST}:${PORT}`)
})