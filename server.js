const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 8080
})
wss.broadcast = function(data, clientValidator = () => true) {
  this.clients.forEach(client => {
    if (clientValidator(client)) {
      client.send(data)
    }
  })
}

wss.on("connection", ws => {

  ws.on('message', message => {
    //  отправляем сообщение всем, кроме автора
    // wss.broadcast(message, client => client !== ws)
    //  отправляем сообщение всем
    console.log(message)
    wss.broadcast(message, client => client) // я знаю что у отправитель посылает и получает своё сообщение тоже :D (пока так)
  })
})