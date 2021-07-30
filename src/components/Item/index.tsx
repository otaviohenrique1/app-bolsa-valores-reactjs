import { FormEvent } from "react";
import styled from "styled-components";
import { BotaoRemover } from "../Botao";
import { BotaoFavorito } from "../Botao";
import { CardEmpresa, EmpresaDados, EmpresaDadosProps, LogoEmpresa, LogoEmpresaProps } from "../Empresa";
import { ImagemGraficoSeta, ValorAcaoPorcentagem, ValorAcaoPorcentagemProps } from "../ValorAcao";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorito } from "../../features/favorito/favoritoSlice";
import { RootState } from "../../app/store";

interface ItemProps {
  logo_empresa: LogoEmpresaProps;
  empresa_dados: EmpresaDadosProps;
  valor_porcentagem: ValorAcaoPorcentagemProps;
  favoritado?: boolean;
  exibeBotaoFavorito?: boolean;
}

interface ItemBoxProps {
  valor_flex?: number;
}

const ItemBox = styled.div<ItemBoxProps>`
  flex: ${(props) => props.valor_flex};
`;

const CardEmpresaEstilizado = styled(CardEmpresa)`
  padding: 0 16px;
`;

const BotaoFavoritoEstilizado = styled(BotaoFavorito)`
  flex: 1;
`;

export function Item(props: ItemProps) {
  return (
    <CardEmpresaEstilizado>
      {(props.exibeBotaoFavorito) && (
        <BotaoFavoritoEstilizado
          favoritado={props.favoritado}
        />
      )}
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
    </CardEmpresaEstilizado>
  );
}

const ItemFavoritadoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const ItemEstilizado = styled(Item)`
  padding-right: 8px;
`;

interface ItemFavoritadoProps extends ItemProps {
  idFavorito: number;
}

export function ItemFavoritado(props: ItemFavoritadoProps) {
  const dispatch = useDispatch();

  const selector = useSelector((state: RootState) => state);

  async function handleSubmitFavorito(event: FormEvent) {
    event.preventDefault();
    const data = selector.favorito.favoritos.find((item) => {
      return props.idFavorito === item.id;
    });
    
    if (data) {
      dispatch(removeFavorito(data));
    } else {
      return;
    }
  }

  return (
    <ItemFavoritadoBox>
      <ItemEstilizado
        favoritado={props.favoritado}
        logo_empresa={{
          src: props.logo_empresa.src,
          alt: props.logo_empresa.alt
        }}
        empresa_dados={{
          nome_empresa: props.empresa_dados.codigo_empresa,
          codigo_empresa: props.empresa_dados.nome_empresa
        }}
        valor_porcentagem={{
          porcentagem: props.valor_porcentagem.porcentagem
        }}
      />
      <form
        onSubmit={handleSubmitFavorito}
      >
        <BotaoRemover
          // onClick={() => {
          //   alert(`Remover favorito ?
          //   id => ${props.idFavorito}`);
          // }}
        />
      </form>
    </ItemFavoritadoBox>
  );
}