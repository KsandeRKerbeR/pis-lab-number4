// асинхронное чтение
const fs = require('fs')
fs.readFile('request.log', 'utf8', function (error, data) {
  console.log('Асинхронное чтение файла')
  if (error) throw error
  console.log(data)
})

// синхронное чтение
//const fs = require('fs')
console.log('Синхронное чтение файла')
let fileContent = fs.readFileSync('request.log', 'utf8')
console.log(fileContent)


fs.writeFile('drafts/document.txt', 'Текстовая запись из метода writeFile', function (error) {
  if (error) throw error // если возникла ошибка
  console.log(
    'Асинхронная запись файла завершена. Содержимое файла:'
  )
  let data = fs.readFileSync('drafts/document.txt', 'utf8')
  console.log(data) // выводим считанные данные
})

fs.writeFile('hello.txt', 'Hello мир!', function (error) {
  if (error) throw error // если возникла ошибка
  console.log(
    'Асинхронная запись файла завершена. Содержимое файла:'
  )
  let data = fs.readFileSync('document.txt', 'utf8')
  console.log(data) // выводим считанные данные
})



























//  Ниже код для Лаб.раб№1 по ПИС

// const express = require('express')
// const app = express()
// const fs = require("fs");
// const dateFormat = require('dateformat');
// const port = 3000
// app.use(express.static(__dirname + '/static'));
// app.use('/static', express.static('static'));

//отправка данных на сервер - парсер для данных
// const bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.get("/register", urlencodedParser, function (request, response) {
//   response.sendFile(__dirname + "/static/form.html");
// });
// app.post("/register", urlencodedParser, function (request, response) {
//   if (!request.body) return response.sendStatus(400);
//   console.log(request.body);
//   response.send(`${request.body.userName} - ${request.body.userAge}`
//   );
// });

// app.get('/', (req, res) => {
//   res.send('<h2>My name is Saidislombek!</h2> <h3>I am using Express JS</h3>')
// })
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// логгирование запросов
// app.use(function (request, response, next) {
//   let now = new Date();
//   let data = dateFormat(now, "dd.mm.yyyy HH:MM") + ` ${request.method
//     } ${request.url} ${request.get("user-agent")}`;
//   console.log(data);
//   fs.appendFile("request.log", data + "\n", function () { });
//   next();
// });
