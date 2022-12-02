const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

inputs.forEach((input) => {
	input.addEventListener('keyup', validar);
	input.addEventListener('blur', validar);
});
function validar(e) {
    e.preventDefault()

    let email = document.getElementById("email").value
    let exp_email = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    const dom_email = document.getElementById("email")
    if (exp_email.test(email)) {
        dom_email.setAttribute("class", "form-control is-valid")
    } else {
        dom_email.setAttribute("class", "form-control is-invalid")
    }
    let phone = document.getElementById("phone").value
    let exp_phone = /^9[0-9]{8}$/;
    const dom_phone = document.getElementById("phone")
    if (exp_phone.test(phone)) {
        dom_phone.setAttribute("class", "form-control is-valid")
    } else {
        dom_phone.setAttribute("class", "form-control is-invalid")
    }
}

formulario.addEventListener('submit', (e) => {

	e.preventDefault();
	let email = document.getElementById("email").value
	if(email === ""){
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_invalid')
		document.getElementById('formulario_mensaje').innerHTML='Tu registro es invalido';
	}
	else {
			document.getElementById('formulario_mensaje').classList.add('formulario_mensaje_valid')
			document.getElementById('formulario_mensaje').innerHTML='Tu registro es valido';
			setTimeout(() => {
				formulario.reset();
			}, 5000);	
		}
		
});
