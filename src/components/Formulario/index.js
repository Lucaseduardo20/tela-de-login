import React from 'react';
import FormularioStyled from './style';
import Validate from '../Validate';

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
			<input type="password" placeholder="Password"></input>
			<button type='submit'>Sign In</button>
		</form>
	</FormularioStyled>
	)
}

export default Formulario;