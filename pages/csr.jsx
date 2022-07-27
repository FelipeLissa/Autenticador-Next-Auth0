import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default withPageAuthRequired(function SSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <h1 data-testid="csr-title">Página renderizada no Client-Side</h1>
        <div data-testid="csr-text">
          <p>
            Você pode proteger páginas csr com o Auth0, em que apenas usuários logados e verificados terão acesso.
          </p>
        </div>
      </div>
    </>
  );
});
