import React from 'react';
import {SiAuth0, SiNextdotjs} from 'react-icons/si'

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <div><img src='android-chrome-192x192.png'/></div>
    <br/>
    <h1 className="mb-4" data-testid="hero-title">
      Autenticação com Next-Auth <SiNextdotjs/> e Auth0 <SiAuth0/>
    </h1>

    <p className="lead" data-testid="hero-lead">
    Este projeto é uma pequena demonstração de uma api feita com Next que possui um processo de autenticação através do Auth0 (Existem outros autenticadores conhecidos como Next-Auth) que permite proteger acesso à páginas com necessidade de  verificação do usuário com socials connections como Google, Facebook, GitHub, Linkedin Apple e muitos outros. 
      <br/>
      <br/>
      <br/>
      <br/>
      <a href="https://autenticador-next-auth0.vercel.app/api/auth/login">Acessar Página de Autenticação</a>
    </p>
    <p> (Observação: toda tentativa de login com um Browser já verificado será redirecionado para o página inicial (<a href='/'>Página Home</a>).
          Com o login efetuado e verificado, você pode acessar páginas restritas por AuthRequired como <a href='/csr'>CSR</a> <a href='/ssr'>SSR</a>)</p>
  </div>
);

export default Hero;
