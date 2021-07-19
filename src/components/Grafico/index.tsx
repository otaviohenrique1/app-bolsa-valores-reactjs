import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import star_fill from "../../assets/images/star_fill.svg";
import graph_down from "../../assets/images/graph-down.svg";

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
  img {
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
  }
`;

const CodigoEmpresa = styled.span`
  font-weight: bold;
`;

const NomeEmpresa = styled.span`
  font-weight: normal;
`;

const AreaDadosAcoes = styled.div`
  position: absolute;
  width: 110px;
  height: 45px;
  left: 623px;
  top: 25px;
  text-align: end;
`;

const ValorAcao = styled.span`
  font-weight: bold;
`;

const ValorAcaoVaricacao = styled.span`
  font-weight: normal;
  color: red;
`;

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

export function Grafico() {
  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 300, pv: 2400, amt: 2400},
    {name: 'Page D', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page E', uv: 278, pv: 2400, amt: 2400},
    {name: 'Page F', uv: 189, pv: 2400, amt: 2400},
  ];

  return (
    <GraficoContainer>
      <AreaDados>
        <AreaDadosEmpresa>
          <span>
            <img src={star_fill} alt="star" />
          </span>
          <div>
            <CodigoEmpresa>MSFT</CodigoEmpresa><br />
            <NomeEmpresa>Microsoft</NomeEmpresa>
          </div>
        </AreaDadosEmpresa>
        <AreaDadosAcoes>
          <ValorAcao>
            <img src={graph_down} alt="graph_down" /> $265,42
          </ValorAcao><br />
          <ValorAcaoVaricacao>$-0.09 (-0.03%)</ValorAcaoVaricacao>
        </AreaDadosAcoes>
      </AreaDados>
      <AreaGrafico>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
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