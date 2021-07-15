import { css } from 'styled-components';

css`
  .titulo-container {
    width: 100%;
  }

  .titulo-container h1 {
    text-align: center;
  }
`;

export function CadastroUsuario() {
  return (
    <div>
      <div className="titulo-container">
        <h1>Cadastro Usuario</h1>
      </div>
    </div>
  );
}