import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { EmpresaDados } from "../Empresa";
import { ImagemGraficoSeta, ValorAcaoEmpresa, ValorAcaoPorcentagemBox, ValorAcaoVaricacaoDinheiro } from "../ValorAcao";
import { BotaoFavorito } from "../Botao";
import { useState } from "react";
import { useEffect } from "react";
import { favoritos } from "../../utils/apis/api_favoritos";
// import { BotaoFavorito } from "../BotaoFavorito";
// import { ValorAcaoPorcentagem, ValorAcaoVaricacao } from "../ValorAcao";
// import star_fill from "../../assets/images/star_fill.svg";
// import graph_down from "../../assets/images/graph-down.svg";
// import graph_up from "../../assets/images/graph-up.svg";

const GraficoContainer = styled.div`
  background: blue;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 20px;

  position: absolute;
  width: 748px;
  height: 380px;
  left: 116px;
  top: 156px;

  background: #FFFFFF;
  box-shadow: 0px 4px 12px rgba(222, 222, 231, 0.4);
  border-radius: 8px;
`;

const AreaDados = styled.div`
  position: static;
  width: 708px;
  height: 46px;
  left: 20px;
  top: 25px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 0px;
`;

const AreaDadosEmpresa = styled.div`
  /* span {
    position: absolute;
    left: 2.67%;
    right: 94.12%;
    top: 10%;
    bottom: 83.68%;
  }

  div {
    position: absolute;
    left: 7.09%;
    right: 83.42%;
    top: 7.89%;
    bottom: 81.32%;
    font-family: Graphik;
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.005em;
    color: #14171A;
  } */
`;

const BotaoFavoritoBox = styled.div`
  position: absolute;
  left: 2.67%;
  right: 94.12%;
  top: 10%;
  bottom: 83.68%;
`;

const EmpresaDadosBox = styled.div`
  position: absolute;
  left: 7.09%;
  right: 83.42%;
  top: 7.89%;
  bottom: 81.32%;
  font-family: Graphik;
  font-style: normal;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.005em;
  color: #14171A;
`;

const AreaDadosAcoes = styled.div`
  position: absolute;
  width: 110px;
  height: 45px;
  left: 623px;
  top: 25px;
  text-align: end;
`;

// const ValorAcaoVaricacao = styled.span`
//   font-weight: normal;
//   color: red;
// `;

const AreaGrafico = styled.div`
  position: static;
  width: 748px;
  height: 380px;
  left: 20px;
  top: 81px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

// interface DataGraficoProps {
//   param2
// }

interface DataExemploProps {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export function Grafico() {
  const [dataGrafico, setDataGrafico] = useState<DataExemploProps[]>([]);

  useEffect(() => {
    const dataExemplo = [
      {name: '10:00', uv: 400, pv: 2400, amt: 2400},
      {name: '10:30', uv: 300, pv: 2400, amt: 2400},
      {name: '11:00', uv: 300, pv: 2400, amt: 2400},
      {name: '12:00', uv: 200, pv: 2400, amt: 2400},
      {name: '13:00', uv: 278, pv: 2400, amt: 2400},
      {name: '14:00', uv: 189, pv: 2400, amt: 2400},
      {name: '13:00', uv: 400, pv: 2400, amt: 2400},
      {name: '15:00', uv: 300, pv: 2400, amt: 2400},
      {name: '16:00', uv: 300, pv: 2400, amt: 2400},
      {name: '17:00', uv: 200, pv: 2400, amt: 2400},
      {name: '17:30', uv: 278, pv: 2400, amt: 2400},
      {name: '18:00', uv: 1000, pv: 2400, amt: 2400},
    ];
    setDataGrafico(dataExemplo);
  }, []);

  return (
    <GraficoContainer>
      <AreaDados>
        <AreaDadosEmpresa>
          <BotaoFavoritoBox>
            <BotaoFavorito />
          </BotaoFavoritoBox>
          <EmpresaDadosBox>
            <EmpresaDados
              codigo_empresa={favoritos[4].codigo_empresa}
              nome_empresa={favoritos[4].nome_empresa}
            />
          </EmpresaDadosBox>
        </AreaDadosEmpresa>
        <AreaDadosAcoes>
          <ValorAcaoEmpresa>
            {/* <img src={graph_down} alt="graph_down" /> */}
            <ImagemGraficoSeta porcentagem={favoritos[4].porcentagem}  />
            {' '}
            {`$${(favoritos[4].valor_acao).toString().replace('.', ',')}`}
          </ValorAcaoEmpresa><br />
          <div>
            <ValorAcaoVaricacaoDinheiro valorVariacaoDinheiro={favoritos[4].valor_variacao_dinheiro} />
            {' '}
            <ValorAcaoPorcentagemBox porcentagem={favoritos[4].porcentagem}/>
          </div>
        </AreaDadosAcoes>
      </AreaDados>
      <AreaGrafico>
        <LineChart width={600} height={300} data={dataGrafico} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </AreaGrafico>
    </GraficoContainer>
  );
}

// export const ValorAcaoVaricacao2 = styled.span<{ acaoCor?: 'success' | 'danger' | ''; }>`
//   font-weight: normal;
//   color: ${(props) =>
//     (props.acaoCor === 'success' && '#79C300') ||
//     (props.acaoCor === 'danger' && '#D64B45')
//   };

//   img {
//     padding-left: 5px;
//     text-align: end;
//   }
// `;

// function ValorAcaoPorcentagem2(props: { porcentagem: number }) {
//   let valor = Math.sign(props.porcentagem);

//   return (
//     <ValorAcaoVaricacao2
//       acaoCor={((valor === 1) && 'success') || ((valor === -1) && 'danger') || ''}
//     >
//       {(valor === 1) && `+${props.porcentagem}%`}
//       {(valor === -1) && `${props.porcentagem}%`}
//       {/* {`${props.porcentagem}%`} */}
//       <img
//         src={(valor === 1) ? graph_up : graph_down}
//         // src={(valor === 1) ? graph_up : graph_down}
//         alt={(valor === 1) ? "graph_up" : "graph_down"}
//       />
//     </ValorAcaoVaricacao2>
//   );
// }