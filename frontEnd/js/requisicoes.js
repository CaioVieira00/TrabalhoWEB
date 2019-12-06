window.onload = function(e) {

	    fetch(
        'http://localhost:8080/TrabalhoWEB/backEnd/Cliente', {
        }).then(response => response.json())
    .then(data => { 
        console.log(data);
        data.forEach( Cliente => {
            var table = document.getElementById("tabeladeclientes");
            var row = table.insertRow(-1);
            var TabNome = row.insertCell(0);
            var TabTelefone = row.insertCell(1); 
            var TabEmail = row.insertCell(2);  
            TabNome.innerHTML = Cliente.nome;
            TabTelefone.innerHTML = Cliente.telefone;
            TabEmail.innerHTML = Cliente.email;
        })
    }).catch(error => console.error(error))
}

function enviarForm() {
	var form = document.getElementById('adicionarCliente');
	var data = {};
	data['nome'] = form.nome.value 
	data['telefone'] = form.telefone.value;
	data['email'] = form.email.value;
	// console.log(JSON.stringify(data));
	fetch('http://localhost:8080/TrabalhoWEB/backEnd/Cliente', {
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
