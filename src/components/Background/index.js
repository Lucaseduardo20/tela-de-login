import App from '../../App'
import React from 'react';
import Background from './style';

function background({background, mundo, children}) {
    return (
        <Background>
            {children}
        </Background>
    )
}

export default background;