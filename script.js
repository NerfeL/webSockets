let ws = new WebSocket("ws://192.168.1.2:8080") // ip адрес моего локального компьютера

document.querySelector('.input-message__btn').addEventListener("click", () => {
	let msg = document.querySelector('.input-message__text').value
	if(msg !== "") {
		document.querySelector('.input-message__text').value = ""
		ws.send(msg)
	}
})





ws.onmessage = ({data}) => {
	console.log(data)
	// let currentDate = new Date()
	let currentDate = new Date()
	let time = "[" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds() + "]"
	let element = document.createElement('div')
	element.setAttribute("time", time)
	element.classList.add('one-msg')
	element.innerHTML = data
	document.querySelector(".messages").appendChild(element)
}



// отправляем сообщение 
// ws.onopen = () => ws.send('new device connected')