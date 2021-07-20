import styled from "styled-components";
import { BotaoFavorito } from "../BotaoFavorito";
import { CardEmpresa, EmpresaDados, EmpresaDadosProps, LogoEmpresa, LogoEmpresaProps } from "../Empresa";
import { ImagemGraficoSeta, ValorAcaoPorcentagem, ValorAcaoPorcentagemProps } from "../ValorAcao";

interface ItemProps {
  logo_empresa: LogoEmpresaProps;
  empresa_dados: EmpresaDadosProps;
  valor_porcentagem: ValorAcaoPorcentagemProps;
}

interface ItemBoxProps {
  valor_flex?: number;
}

const ItemBox = styled.div<ItemBoxProps>`
  flex: ${(props) => props.valor_flex};
`;

export function Item(props: ItemProps) {
  return (
    <CardEmpresa style={{ padding: '0 16px' }}>
      <BotaoFavorito style={{ flex: '1' }} />
      <ItemBox valor_flex={1.5}>
        <LogoEmpresa
          src={props.logo_empresa.src}
          alt={props.logo_empresa.alt}
        />
      </ItemBox>
      <ItemBox valor_flex={5}>
        <EmpresaDados
          codigo_empresa={props.empresa_dados.codigo_empresa}
          nome_empresa={props.empresa_dados.nome_empresa}
        />
      </ItemBox>
      <ItemBox valor_flex={3}>
        <ValorAcaoPorcentagem porcentagem={props.valor_porcentagem.porcentagem} />
        <ImagemGraficoSeta porcentagem={props.valor_porcentagem.porcentagem}  />
      </ItemBox>
    </CardEmpresa>
  );
}