import React from 'react';
import ButtonStyled from './style';

function Button ({ nome = 'Nome indefinido', children, idade = 'Não definida'}) {
    return (
        <ButtonStyled>
           {/* {idade && idade} */}
        </ButtonStyled>
    )
}

export default Button;
