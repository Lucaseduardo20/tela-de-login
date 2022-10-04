import React from 'react';
import FormularioStyled from './style';
import Validate from '../Validate';
import RegisterBox from '../RegisterBox'

function Formulario(props) {
	function validateForm (_props) {
		_props.preventDefault();

		const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!regexEmail.test(_props.target[0].value)) {
			alert('O email inserido é inválido.')
		} else {
			alert('O email é válido')
		}

		//console.log(.test(_props.target[0].value))
	}

	return (
	<FormularioStyled>
		<form onSubmit={validateForm}>
			<input type="text" placeholder="Username"></input>
			<input type="text" placeholder="Password"></input>
			<button class="login" type='submit'>Sign In</button>
			<span>Ainda não possui cadastro?</span>
			<button class="cadastro" type='button' onClick={RegisterBox}>Register</button>
		</form>
	</FormularioStyled>
	)
}

export default Formulario;