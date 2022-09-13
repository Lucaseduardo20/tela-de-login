import React from 'react';
import FormularioStyled from './style';
import Validate from '../Validate';

function Formulario(props) {
	return (
	<FormularioStyled>
		<form>
			<input type="text" placeholder="Username" value={userName}></input>
			<input type="password" placeholder="Password" value={password}></input>
			<button type='submit'>Sign In</button>
		</form>
	</FormularioStyled>
	)
}

export default Formulario;