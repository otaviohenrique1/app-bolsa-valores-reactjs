import styled from "styled-components";
// import star_fill from "../../../assets/images/star_fill.svg";
// import graph_down from "../../../assets/images/graph-down.svg";
import graph_up from "../../../assets/images/graph-up.svg";
import stats_graph from "../../../assets/images/stats_graph.svg";
import arrow_left from "../../../assets/images/arrow-left.svg";
import arrow_right from "../../../assets/images/arrow-right.svg";
import facebook from "../../../assets/images/facebook.svg";
import { BotaoFavorito } from "../BotaoFavorito";

const EmpresasRecentesContainer = styled.div`
position: absolute;
/* width: 749px; */
/* height: 136px; */
/* top: 450px; */
background: #f1ecec;
margin-top: 39px;
width: 789px;
height: 136px;
left: 115px;
top: 575px;
`;

const TituloContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
position: absolute;
width: 198px;
height: 27px;
left: 12px;
top: 0px;

img {
  position: static;
  left: 0%;
  right: 87.88%;
  top: 0%;
  bottom: 11.11%;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 8px;
}

p {
  position: static;
  width: 166px;
  height: 27px;
  left: 32px;
  top: 0px;
  font-family: Graphik;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #14171A;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 8px;
}

div {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 36px;
  height: 12px;
  left: 725px;
  top: 7px;

  img {
    width: 6px;
    height: 12px;
  }
}
`;

const CardEmpresaContainer = styled.div`
  position: absolute;
  left: 15px;
  bottom: 20px;
`;

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

export function EmpresasRecentes() {
  return (
    <EmpresasRecentesContainer>
      <TituloContainer>
        <img src={stats_graph} alt="stats_graph" />
        <p>Empresas recentes</p>
        <div>
          <img src={arrow_left} alt="arrow_left" />
          <img src={arrow_right} alt="arrow_right" />
        </div>
      </TituloContainer>
      <CardEmpresaContainer>
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
              src={facebook}
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
      </CardEmpresaContainer>
    </EmpresasRecentesContainer>
  );
}