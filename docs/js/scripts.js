(function($) {
    function doLogin(e) {
        var name = $('#name').val();
    	var pass = $('#pass').val();

        var lsName = localStorage.getItem(name);

    	if ((lsName !== null) && (lsName === pass)) {
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
        var validForm = true;

        if ((email === '') && (senha === '') && (userTypeLength === 0)) {
            $('#warningEmpty').removeClass('hide');
            validForm = false;
        } else {
            if (email !== cemail) {
                $('#warningEmail').removeClass('hide');
                validForm = false;
        	}

            if (senha !== csenha) {
                $('#warningPass').removeClass('hide');
                validForm = false;
            }

            if (userTypeLength === 0) {
                $('#warningPass').removeClass('hide');
                validForm = false;
            }
        }

        if (validForm) {
            var userType = $('input[name=userType]:checked').val();
            registerLocalStorage(email, senha, userType);
        }
    }

    function registerLocalStorage(email, senha, userType) {
        localStorage.setItem(email, senha);

        if (userType === 'aluno') {
            redirecionar('./Procurar.html');
        } else {
            redirecionar('./CadastroProfessor.html');
        }
    }

    function signUpValidationProfessor() {
        redirecionar('./Anunciar.html');
    }

    function signUpValidationProfessorEscolaridade() {
        redirecionar('./CadastroProfessor-Escolaridade.html');
    }

    function main() {
        $('#doLogin').click(doLogin);
        $('#signUpValidation').click(signUpValidation);
        $('#signUpValidationProfessor').click(signUpValidationProfessor);
        $('#signUpValidationProfessorEscolaridade').click(signUpValidationProfessorEscolaridade);
    }

    main();
})(jQuery);
