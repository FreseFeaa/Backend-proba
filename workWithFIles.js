const fs = require("fs")

// fs.writeFileSync('some.txt','hi world')   // Переписать файл (Удалить и записать все заново)

// let res = fs.readFileSync('some.txt', 'utf-8')  // Считать файл

// fs.writeFileSync('some.txt',res+'\nhi world')   // Переписать файл (К текущему тексту добавить новый)

fs.readFile('some.txt', 'utf-8', (err,data) => {                        // Тут асинхронные функции, они происходят не дожидаясь конца предыдущей
    fs.writeFile('some.txt', data+'\n Some text', (err,data) =>{        // Считываю файл some.txt после, калбек-функцией запускаю добавление строчки Some text 
        console.log("Все сработало)")                                   // Если все хорошо, то в консоли сообщение Все сработало)
    if (err){
        console.log("Данные не записались, вот ошибка: \n"+err)                            // Если ошибка, все будет в консоли
    }
    })
})