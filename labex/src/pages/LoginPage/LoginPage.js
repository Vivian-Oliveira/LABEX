import React from 'react'
import { InputTextLogin, LoginContainer, MainLogin, TitleLogin, ButtonLogin } from './styled';

const LoginPage = () => {
    return (
        <LoginContainer>
        <MainLogin>
        <TitleLogin>Login</TitleLogin> 
        <h4>E-mail <InputTextLogin ></InputTextLogin>  </h4>
        <h4>Senha  <InputTextLogin ></InputTextLogin> </h4>
        <ButtonLogin >Enviar</ButtonLogin>
        </MainLogin>
    </LoginContainer>
    )
}

export default LoginPage