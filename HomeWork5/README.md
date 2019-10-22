# OtusJS_HomeWorks
Реализовать скрипт request для тестирования веб сервера
Создать локальный веб сервер `server`, отвечающий на запросы каждые 100ms

Создать скрипт `request`, принимающий на вход
- количество запросов `N`
- тип запросов - параллельный или последовательный

Скрипт `request` должен отправлять `N` последовательных или параллельных `HTTP` запросов к локальному серверу `server`

Ренализация: 
1) server.js - запускается командой node server.js - реализует ответ нв запрос и потом задержку для паралельных запросов задержка не критична для последовательных будет видна


2) request.js - асинхронная функция reqest реализована где создаются паралельные запросы обычным циклом и последовательные с await (в итоге ждет завершения от сервера задержки) 

Пример 
request(5, 'parallel'); - 5 паралельных
request(10, 'serial'); - 10 последовательных

результат: - паралельные все вышли практически одновременно 100 ms + еще время работы цикла - а последовательные друг за дружкой благодаря await

parallel output (5): Hello World!
request.js:27
parallel output (5): Hello World!
request.js:27
parallel output (5): Hello World!
request.js:27
parallel output (5): Hello World!
request.js:27
parallel output (5): Hello World!
request.js:27
serial output (0): Hello World!
request.js:36
serial output (1): Hello World!
request.js:36
serial output (2): Hello World!
request.js:36
serial output (3): Hello World!
request.js:36
serial output (4): Hello World!
request.js:36
serial output (5): Hello World!
request.js:36
serial output (6): Hello World!
request.js:36
serial output (7): Hello World!
request.js:36
serial output (8): Hello World!
request.js:36
serial output (9): Hello World!

