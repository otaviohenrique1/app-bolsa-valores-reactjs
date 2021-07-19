import styled from "styled-components";
import graph_up from "../../assets/images/graph-up.svg";
import { BotaoFavorito } from "../BotaoFavorito";

const CardEmpresa = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 73px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
  border-radius: 8px;
`;

const CodigoEmpresa = styled.span`
  font-weight: bold;
`;

const NomeEmpresa = styled.span`
  font-weight: normal;
`;

interface ValorAcaoVaricacaoStyleProps {
  success?: boolean;
  danger?: boolean;
}

const ValorAcaoVaricacao = styled.span<ValorAcaoVaricacaoStyleProps>`
  font-weight: normal;
  /* color: #79C300; */
  /* color: #D64B45; */
  color: ${(props) =>
    (props.success && '#79C300') ||
    (props.danger && '#D64B45')
  };
`;

interface ItemProps {
  logo_empresa: string;
}

export function Item(props: ItemProps) {
  return (
    <CardEmpresa style={{ padding: '0 16px' }}>
      <BotaoFavorito
        style={{
          flex: '1',
        }}
      />
      <span
        style={{
          flex: '1.5',
        }}
      >
        <img
          src={props.logo_empresa}
          alt="facebook"
          style={{
            width: '36px',
            height: '36px',
          }}
        />
      </span>
      <div style={{ flex: '5' }}>
        <CodigoEmpresa>FB</CodigoEmpresa><br />
        <NomeEmpresa>Facebook</NomeEmpresa>
      </div>
      <div style={{ flex: '3' }}>
        <ValorAcaoVaricacao success>
          +2.3%
          <img
            src={graph_up}
            alt="graph_up"
            style={{
              paddingLeft: '5px',
              textAlign: 'end'
            }}
          />
        </ValorAcaoVaricacao>
      </div>
    </CardEmpresa>
  );
}