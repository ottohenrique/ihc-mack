(function($) {
    function doLogin(e) {
        // console.log(localStorage.getItem('email'));
        var name = document.getElementById('name').value;
    	var pass = document.getElementById('pass').value;

    	if ((name == 'aluno@teste.com.br' || name == 'professor@teste.com.br') && pass == '123456') {
    		redirecionar('./Procurar.html');
    	} else {
    		if (name == "") {
    			alert('E-mail não preenchido');
    		}else{
    			if (pass == "") {
    				alert('Senha não preenchida');
    			} else {
    				alert('Usuário ou senha incorreto');
    			}
    		}
    	}
    }

    function redirecionar(link) {
    	window.location.assign(link);
    }

    function validar() {
        var email = $('#email').val();
    	var cemail = $('#cemail').val();
    	var senha = $('#senha').val();
    	var csenha = $('#cenha').val();


    	if (email != cemail) {
    		alert("O e-mail é diferente!");
    	}

    	if (senha != csenha) {
    		alert("A senha é diferente!");
    	}

    	if ($("#aluno").attr('checked')) {
    		redirecionar('./Procurar.html');
    	} else {
    		redirecionar('./CadastroProfessor.html');
    	}
    }

    function main() {
        $('#doLogin').click(doLogin);
    }

    main();
})(jQuery);
