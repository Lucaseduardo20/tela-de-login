import React from 'react';
import RegisterBoxStyled from './style';
import Formulario from '../Formulario/index';

function RegisterBox({ f, text, children }) {
	return (
        <RegisterBoxStyled>
            {children}
        </RegisterBoxStyled>
	)
}

export default RegisterBox;