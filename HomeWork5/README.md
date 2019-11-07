# OtusJS_HomeWorks
Реализовать скрипт request для тестирования веб сервера
Создать локальный веб сервер `server`, отвечающий на запросы каждые 100ms

Создать скрипт `request`, принимающий на вход
- количество запросов `N`
- тип запросов - параллельный или последовательный

Скрипт `request` должен отправлять `N` последовательных или параллельных `HTTP` запросов к локальному серверу `server`

Ренализация: 
1) server.js - запускается командой node server.js - реализует ответ на запрос с задержкой для паралельных запросов задержка не критична для последовательных будет видна


2) request.js - асинхронная функция reqest реализована где создаются паралельные запросы обычным циклом и последовательные с await (в итоге ждет завершения от сервера задержки) 
запуск: node request.js <num>  <type> - где num - количество запросов ; type - тип serial или parallel

Пример 

PS C:\Users\Alex Chukhvantsev\Documents\OTUS\HW5\OtusJS_HomeWorks\HomeWork5> node request.js 5 serial
serial output (0): Hello World!
serial output (1): Hello World!
serial output (2): Hello World!
serial output (3): Hello World!
serial output (4): Hello World!
PS C:\Users\Alex Chukhvantsev\Documents\OTUS\HW5\OtusJS_HomeWorks\HomeWork5> node request.js 5 parallel
parallel output (5): Hello World!
parallel output (5): Hello World!
parallel output (5): Hello World!
parallel output (5): Hello World!
parallel output (5): Hello World!
PS C:\Users\Alex Chukhvantsev\Documents\OTUS\HW5\OtusJS_HomeWorks\HomeWork5> 