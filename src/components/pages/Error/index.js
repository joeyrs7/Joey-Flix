import React from 'react';
import {Title} from './styles';
import PageDefault from '../../PageDefault'



function error404(){
    return(
   
            <PageDefault>
                <Title>Eita!<spanEmoji>
                    <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/238/grimacing-face_1f62c.png' alt='emoji' style={{marginLeft:30, position:"absolute", marginTop:-5}}></img>
                </spanEmoji></Title>
                <h2>Eu não conseguir achar a página que você está procurando.</h2>
                <h3>Mas, consegui achar um jogo maneirão.</h3>
                <h4>Código de erro: 404</h4>
                <iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="600" title='Flappy Bird' scrolling="no" style={{paddingBottom:30,marginLeft:1000,marginTop:-310 }}></iframe>
            </PageDefault>
            
     
    );
}

export default error404;