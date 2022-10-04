import React, { useState } from 'react';
import Formulario from '../Formulario/index';

function Validate (props) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const isValid = validateForm()

    const validateForm = () =>{
        if(userName == ""){
            alert("email invalido");
        }
    }
}

export default Validate;