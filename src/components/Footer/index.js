import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img src={Logo} alt="Logo EduFlix" height='70x' />
      </a>
      <p>
        Orgulhosamente criado durante a <a href="https://www.alura.com.br/"><img src="https://www.alura.com.br/assets/img/imersoes/react/imersao-react-logo.1594044142.svg" target='_blank' rel="noopener noreferrer" alt='imersao logo' height='40px'/>
        </a>
      </p>
    </FooterBase>
  );
}


export default Footer;
