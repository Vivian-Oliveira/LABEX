import React from 'react'
import { AppBarContainer, NavBarContainer } from './styled';


export function AppBar (){
    //const history = useHistory();

    // function logout() {
    //     localStorage.removeItem('token')
    //     alert('Deslogado com sucesso')
    //   }
    return (
        <AppBarContainer>
            <h1>LabeX</h1>
            {/* <NavBarContainer>
                < ButtonAppBar onClick={() => goToHomePage(history)}>Home </ ButtonAppBar>
                < ButtonAppBar onClick={() => goToTripsPage(history)}>Destinos </ ButtonAppBar>
                < ButtonAppBar onClick={() => goToFormPage(history)}>Cadastre-se </ ButtonAppBar>
                < ButtonAppBar onClick={() => goToLoginPage(history)}>Login </ ButtonAppBar>
                < ButtonAppBar onClick={() => logout()}>logout </ ButtonAppBar>
            </NavBarContainer> */}
        </AppBarContainer>
    )
}