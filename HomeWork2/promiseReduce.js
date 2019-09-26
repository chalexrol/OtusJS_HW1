var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
    }
    
    var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
    })
    
    
    function promiseReduce(asyncFunctions, reduce, initialValue) {   
    /* 
    * Реализация
    */
   
    return new Promise((resolve) => {

    let result = Promise.resolve(initialValue) 

    for (let func of asyncFunctions) { // поочередно вызывает асинхр функции

      result = result.then(func).then((res) => initialValue = reduce(initialValue, res)) // выполняет reduce при получении результата от вызваной ф-ции но до вызова след ф-ции

    }

    result.then(() => resolve(initialValue)) 

  })

    }
    
     // Функция promiseReduce получает на вход массив асинхронных функций, reduce функцию и стартовое значение initialValue
    promiseReduce(
    [fn1, fn2], 
    function (memo, value) {
    console.log('reduce')
    return memo * value
    }, 
    1
    )
    .then(console.log) 


    /* Вывод в консоли
 
fn1
reduce
fn2
reduce
2

*/