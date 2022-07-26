import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

import Highlight from '../components/Highlight';

export default function SSRPage({ user }) {
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Página renderizada no Server-Side</h1>
        <div data-testid="ssr-text">
          <p>
          Você pode proteger páginas ssr com o Auth0, em que apenas usuários logados e verificados terão acesso.
          </p>
          <br/>
          <p>
            Páginas protegidas só podem ser acessadas após efetuar <a href='/api/auth/login'>Login</a>. Para efeito de teste, você pode efetuar Logout no botão abaixo
            e tentar acessar essa página novamente.
          </p>
          <p>
            <a href='/api/auth/logout'>Efetuar LogOut</a>
          </p>
        </div>
      </div>
      <div className="result-block-container" data-testid="ssr-json">
        <div className="result-block">
          <h6 className="muted">Usuário Props</h6>
          <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
