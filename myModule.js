const add = (a,b) => {
return a+b;
}

const minus = (a,b) => {
    return a-b;
}

module.exports = {      //добавление функций в модуль
    add: add,
    minus: minus
}

// const my_math = require("./myModule")     чтобы использовать функции в другом файле  (Например my_module.add(5,7) )

