import styled, {css} from "styled-components";

const Formulario = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;

    > form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        > input {
            width: 90%;
            height: 30px;
            font-size: 20px;
            border: none;
            border-bottom: 1px solid rgba(229, 229, 229, 1);
            margin-bottom: 40px;

            &:focus {
                outline: none;
                border-bottom: 1px solid black;
            }

            &::placeholder {
                color: grey;
            }
        }
        
        > button.login {
            width: 35%;
            height: 30px;
            color: white;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            background-color: #53b8cc;
            transition: 1s;

            &:hover {
                cursor: pointer;
                background-color: #53ccca;

            }
        }

        > button.cadastro {
            width: 55%;
            height: 30px;
            color: white;
            font-size: 20px;
            text-transform: uppercase;
            font-weight: bold;
            border: none;
            border-radius: 5px;
            background-color: #ec6285;
            transition: 1s;

            
            &:hover {
                cursor: pointer;
                background-color: white;
                color: #ec6285;
            }
        }

        > span {
            margin: 20px 0 20px 0;
            color: grey;
            text-transform: uppercase;
        }
    }
`

export default Formulario;