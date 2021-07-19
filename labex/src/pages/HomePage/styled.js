import styled from 'styled-components'

export const HomeContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Cardo&family=Changa:wght@300&family=Francois+One&display=swap');
font-family: 'Francois One', sans-serif;
/* display: flex; */
background-color: #F5F5F5;
color:#000;
/* width: 100%;
height: 100%; */
`
export const TitleContainer = styled.h1`
justify-content: center;
flex-wrap: wrap;

`
export const MainContainer = styled.div`
display: flex;
align-items: center;
padding: 2% 10% 15% 10%;
`
export const ParagraphContainer = styled.div`
/* display: flex; */
align-items: right;
border-right: 3px dashed black;
margin-right: 5em;
padding-right: 2em;
`
export const ButtonCOntainer = styled.div`
width: 100%;

`

export const ButtonNav = styled.button`
width: 10%;
text-align: center;
font-family: 'Francois One', sans-serif;
background-color:#f2f2f8;
transition-duration: 0.4s;
margin: auto;
width: 50%;
padding: 10px;
border: none;
border-radius: 3px;
cursor: pointer;
float: center;
:hover {
background-color:  #1a237e;
color:#FFFFFF;
}
`