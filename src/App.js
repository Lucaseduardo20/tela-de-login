import './App.css';
import Button from './components/Button';
import Background from './components/Background/index';
import LoginBox from './components/LoginBox/index';
import { AiOutlineLock } from 'react-icons/ai' ;
import Formulario from './components/Formulario/index';
// import Validate from './validate/index.js'

function App() {
  return (
    <>
    <nav></nav>

    <header></header>

    <Background>
      <LoginBox>
        <AiOutlineLock/>
        <Formulario />
      </LoginBox>
    </Background>
    </>
  );
}

export default App;
