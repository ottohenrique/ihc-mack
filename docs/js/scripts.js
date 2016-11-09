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

    function signUpValidation() {
        var email = $('#email').val();
    	var cemail = $('#cemail').val();
    	var senha = $('#senha').val();
    	var csenha = $('#csenha').val();
        var userTypeLength = $('input[name=userType]:checked').length;

        console.log(typeof userTypeLength);

        if ((email === '') || (senha === '') || (userTypeLength === 0)) {
            $('#warningEmpty').removeClass('hide');
        } else {
            if (email !== cemail) {
                $('#warningEmail').removeClass('hide');
        	}

        	if (senha !== csenha) {
                $('#warningPass').removeClass('hide');
        	}

            if (userTypeLength === 0) {
                $('#warningPass').removeClass('hide');
            }
        }

        // TODO: Terminar de implementar a validacao e o redirect para o cadastro
    	// if ($("#aluno").attr('checked')) {
    	// 	redirecionar('./Procurar.html');
    	// } else {
    	// 	redirecionar('./CadastroProfessor.html');
    	// }
    }

    function main() {
        $('#doLogin').click(doLogin);
        $('#signUpValidation').click(signUpValidation);
    }

    main();
})(jQuery);
