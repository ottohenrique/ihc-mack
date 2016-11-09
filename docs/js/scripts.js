(function($) {
    function doLogin(e) {
        var name = $('#name').val();
    	var pass = $('#pass').val();

        var lName = localStorage.getItem(name);

    	if ((lName !== null) && (lName === pass)) {
    		redirecionar('./Procurar.html');
    	} else {
            $('#warningUserPass').removeClass('hide');
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
