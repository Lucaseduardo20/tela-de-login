import React from 'react';
import LoginBoxStyled from './style';
import Formulario from '../Formulario/index';

function LoginBox({ f, text, children }) {
	return (
		<LoginBoxStyled>
			{children}
		</LoginBoxStyled>
	)
}

export default LoginBox;