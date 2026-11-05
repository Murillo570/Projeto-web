document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#form-login');
    
    if (formulario) {
        formulario.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            const usuarioInput = document.querySelector('#usuario');
            const senhaInput = document.querySelector('#senha');
            const codigoInput = document.querySelector('#codigo_seguranca');

            const usuarioCorreto = "patricksp@riot.val";
            const senhaCorreta = "123";
            const codigoCorreto = "849201";

            let valido = true;

            [usuarioInput, senhaInput, codigoInput].forEach(input => {
                input.style.borderColor = '#36393e';
            });

            if (usuarioInput.value.trim() !== usuarioCorreto) {
                usuarioInput.style.borderColor = '#ff4655';
                valido = false;
            }

            if (senhaInput.value.trim() !== senhaCorreta) {
                senhaInput.style.borderColor = '#ff4655';
                valido = false;
            }

            if (codigoInput.value.trim() !== codigoCorreto || codigoInput.value.trim().length !== 6) {
                codigoInput.style.borderColor = '#ff4655';
                valido = false;
            }

            if (valido) {
                window.location.href = '..//Gerenciador-projetos/admin/Projeto-admin/ver-projetos.html';
            }
        });
    }
});