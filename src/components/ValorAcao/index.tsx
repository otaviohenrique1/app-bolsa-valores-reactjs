import styled from "styled-components";
import graph_up from "../../assets/images/graph-up.svg";
import graph_down from "../../assets/images/graph-down.svg";

export interface ValorAcaoVaricacaoStyleProps {
  /*
  success?: boolean;
  danger?: boolean;
  */
  acaoCor?: 'success' | 'danger' | '';
}

export const ValorAcaoVaricacao = styled.span<ValorAcaoVaricacaoStyleProps>`
  font-weight: normal;
  color: ${(props) =>
    (props.acaoCor === 'success' && '#79C300') ||
    (props.acaoCor === 'danger' && '#D64B45')
  };

  /* img {
    padding-left: 5px;
    text-align: end;
  } */
`;

/*
  color: ${(props) =>
    (props.success && '#79C300') ||
    (props.danger && '#D64B45')
  };
*/

const ImgGraficoSeta = styled.img`
  padding-left: 5px;
  text-align: end;
  /* width: 15px;
  height: 8px; */
`;

export function ImagemGraficoSeta(props: ValorAcaoPorcentagemProps) {
  let valor = Math.sign(props.porcentagem);
  const verificaSeValorForPositivo = valor === 1;
  const verificaSeValorForNegativo = valor === -1;

  return (
    <ImgGraficoSeta
      src={((verificaSeValorForPositivo) && graph_up) ||
        ((verificaSeValorForNegativo) && graph_down) || ""}
      alt={((verificaSeValorForPositivo) && "graph_up") ||
        ((verificaSeValorForNegativo) && "graph_down") || ""}
    />
  );
}

export interface ValorAcaoPorcentagemProps {
  porcentagem: number;
}

export function ValorAcaoPorcentagem(props: ValorAcaoPorcentagemProps) {
  let valor = Math.sign(props.porcentagem);
  const verificaSeValorForPositivo = valor === 1;
  const verificaSeValorForNegativo = valor === -1;

  return (
    <ValorAcaoVaricacao
      acaoCor={
        ((verificaSeValorForPositivo) && 'success') ||
        ((verificaSeValorForNegativo) && 'danger') ||
        ''}
    >
      {((verificaSeValorForPositivo) && `+${props.porcentagem}%`) ||
      ((verificaSeValorForNegativo) && `${props.porcentagem}%`)}
      {/* {`${props.porcentagem}%`} */}
    </ValorAcaoVaricacao>
  );
}

/*
export function ValorAcaoPorcentagem(props: ValorAcaoPorcentagemProps) {
  const [valorAcaoImagem, setValorAcaoImagem] = useState<boolean>(false);

  let valor = Math.sign(props.porcentagem);
  
  if (valor === 1) {
    setValorAcaoImagem(true);
  } 
  if (valor === -1) {
    setValorAcaoImagem(false);
  }

  return (
    <ValorAcaoVaricacao acaoCor={(valorAcaoImagem) ? 'success' : 'danger'}>
      {(valor === 1) && `+${props.porcentagem}%`}
      {(valor === -1) && `-${props.porcentagem}%`}
      {`${props.porcentagem}%`}
      <img
        src={(valorAcaoImagem) ? graph_up : graph_down}
        alt={(valorAcaoImagem) ? "graph_up" : "graph_down"}
        // style={{
        //   paddingLeft: '5px',
        //   textAlign: 'end'
        // }}
      />
    </ValorAcaoVaricacao>
  );
}
*/