import React from 'react'
import { HomeContainer, ParagraphContainer, TitleContainer, MainContainer, ButtonNav, ButtonCOntainer } from './styled';
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <HomeContainer>
            <ButtonCOntainer>
                <Link to={'/login'}>
                    <  ButtonNav >Área do administrador </ ButtonNav>
                </Link>
                <Link to={'/inscricao'}>
                    <  ButtonNav >Quero me cadastrar </ ButtonNav>
                </Link>
            </ButtonCOntainer>
            <MainContainer>
                <ParagraphContainer>
                    <TitleContainer>Já pensou em ir para o espaço?</TitleContainer>
                    A LabeX pode fazer seu sonho se tornar realidade!
                    Somos especialistas em viagens espaciais, temos viagens para todos os planetas da galáxia.
                    Caso queira se aventurar com a gente, cadastre-se e vamos nessa!
                </ParagraphContainer>
                <img src="https://static.vecteezy.com/ti/vetor-gratis/p1/594059-foguete-ou-nave-espacial-estao-explorando-as-estrelas-no-vasto-universoprint-gr%C3%A1tis-vetor.jpg" />
            </MainContainer>
        </HomeContainer>
    )
}

export default HomePage