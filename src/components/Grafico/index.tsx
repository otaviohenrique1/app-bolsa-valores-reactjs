import styled from "styled-components";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import star_fill from "../../assets/images/star_fill.svg";
import graph_down from "../../assets/images/graph-down.svg";
import stats_graph from "../../assets/images/stats_graph.svg";
import arrow_left from "../../assets/images/arrow-left.svg";
import arrow_right from "../../assets/images/arrow-right.svg";
import facebook from "../../assets/images/facebook.svg";

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

const EmpresasRecentesContainer = styled.div`
  position: absolute;
  width: 749px;
  height: 136px;
  top: 450px;
  /* left: 115px; */
  /* top: 575px; */
  /* background: #f1ecec; */
  /* position: absolute; */
  background: #f1ecec;
  margin-top: 39px;
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
    /* left: 700px;
    top: 7px; */
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
  align-items: flex-start;
  /* padding: 16px; */
  /* position: absolute; */
  /* left: 15px;
  bottom: 20px; */
  /* left: 1.71%; */
  /* right: 59%;
  top: 11.97%; */
  /* bottom: 36.62%; */
  /* bottom: 20%; */
  width: 300px;
  height: 73px;
  background: #FFFFFF;
  box-shadow: 0px 8px 20px -2px rgba(43, 37, 63, 0.1);
  border-radius: 8px;
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
          <CardEmpresa>
            <img src={star_fill} alt="star_fill" />
            <img src={facebook} alt="facebook" />
            <div>
              <CodigoEmpresa>FB</CodigoEmpresa><br />
              <NomeEmpresa>Facebook</NomeEmpresa>
            </div>
            <div>
              <ValorAcaoVaricacao>$-0.09 (-0.03%)</ValorAcaoVaricacao>
            </div>
          </CardEmpresa>
        </CardEmpresaContainer>
      </EmpresasRecentesContainer>
    </GraficoContainer>
  );
}