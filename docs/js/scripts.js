function login () {
	var name = document.getElementById('name').value;
	var pass = document.getElementById('pass').value;

	if ((name == 'aluno@teste.com.br' || name == 'professor@teste.com.br') && pass == '123456') {
		redirecionar('./Procurar.html');
	} else {
		if (name == "") {
			alert('E-mail não preenchido')
		}else{
			if (pass == "") {
				alert('Senha não preenchida')
			} else { 
				alert('Usuário ou senha incorreto');
			}
		}
	}
	
}

function validar() {
	var email =  document.getElementById('email').value;
	var cemail = document.getElementById('cemail').value;
	var senha = document.getElementById('senha').value;
	var csenha = document.getElementById('cenha').value;


	if (email != cemail) {
		alert("O e-mail é diferente!");
	}

	if (senha != csenha) {
		alert("A senha é diferente!");
	}

	if (document.getElementById("aluno").checked) {
		redirecionar('./Procurar.html');
	} else {
		redirecionar('./CadastroProfessor.html');
	}

}

function redirecionar(link) {
	window.location.assign(link);
}