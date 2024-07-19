const fs = require ('fs')


fs.mkdir('textFiles', ()=>{                                     //Создает папку textFiles
    fs.writeFile ("./textFiles/some.txt",  "Hello world", () => {})   //В папке textFiles создает файл some.txt, с текстом Hello world
})


fs.unlink("./textFiles/some.txt", () => {                       //Удаляем файл some.txt
    fs.rmdir("./textFiles", () => {                             //Удаляем папку textFiles
        console.log("Папка удалена")                            // Мы не могли удалить сразу папку, ткк нельзя удалять папку внутри которой есть содержимое
    })
})