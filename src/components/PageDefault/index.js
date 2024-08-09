import React from 'react';
import Menu from '../Menu/index.js'
import Footer from '../Footer'
import styled, {css} from 'styled-components'

const Main = styled.main`
background-image:linear-gradient(to bottom, rgba(10,10,10,1) 75%, rgba(6,6,6,1) 90%, rgba(0,0,0,1) 100%);
color: var(--white);
flex: 1;
padding-top: 50px;
padding-left: 5%;
padding-right: 5%;
${({paddingAll}) =>  css`
padding: ${paddingAll};
`}


`;


function PageDefault({ children , paddingAll}) {
    return (
        <>
            <Menu local='/register' texto='Novo vídeo'/>
                <Main paddingAll={paddingAll}>
                {children}
                </Main>
            <Footer />
        </>
    );
}

export default PageDefault;