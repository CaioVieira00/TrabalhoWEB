window.onload = function(e) {

function enviarForm() {
	var form = document.getElementById('adicionarCliente');
	var data = {};
	data['nome'] = form.nome.value 
	data['telefone'] = form.telefone.value;
	data['email'] = form.email.value;
	// console.log(JSON.stringify(data));
	fetch('localhost:80/TrabalhoWEB/backEnd/Cliente', {
		method: 'POST',       
		body: JSON.stringify(data)
	})
	.then((response) => {
		if (response.ok) {
			return response.json() 
		} else {
			return Promise.reject({ status: res.status, statusText: res.statusText });
		}   

	})
	.then((data) => console.log(data))
	.catch(err => console.log('Error message:', err.statusText));
}
}