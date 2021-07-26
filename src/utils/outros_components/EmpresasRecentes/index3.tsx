import styled from "styled-components";
import stats_graph from "../../../assets/images/stats_graph.svg";
import { Item } from "../../../components/Item";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { favoritos } from "../../apis/api_favoritos";
import Carousel from "react-elastic-carousel";

const EmpresasRecentesContainer = styled.div`
position: absolute;
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
  left: 710px;
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
  display: flex;
  align-items: center;
  flex-direction: row;
`;

interface BotaoSetaProps {
  icon: any;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const BotaoSetaStyle = styled.button`
  border: none;
  background: none;
  color: #0047BB;

  svg:active {
    color: darkblue;
  }

  &:active {
    background: lightgray;
    border-radius: 100%;
  }
`;

function BotaoSeta(props: BotaoSetaProps) {
  return (
    <BotaoSetaStyle type="button" {...props.props}>
      {props.icon}
    </BotaoSetaStyle>
  );
}

const ItemEstilizado = styled.div`
  margin-right: 21px;
  &:last-child {
    margin-right: 0;
  }
`;

interface DataProps {
  id: number;
  favorito: boolean;
  src: string;
  alt: string;
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
}

export function EmpresasRecentes() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    setData(favoritos);
  }, []);

  return (
    <EmpresasRecentesContainer>
      <TituloContainer>
        <img src={stats_graph} alt="stats_graph" />
        <p>Empresas recentes</p>
        <div>
          <BotaoSeta icon={<MdKeyboardArrowLeft size={30} />} />
          <BotaoSeta icon={<MdKeyboardArrowRight size={30} />} />
        </div>
      </TituloContainer>
      <CardEmpresaContainer>
        <Carousel
          itemsToShow={3}
          isRTL={false}
        >
          {data.map((item, index) => (
              <ItemEstilizado
                key={index}
              >
                <Item
                  exibeBotaoFavorito={true}
                  logo_empresa={{
                    src: item.src,
                    alt: item.alt
                  }}
                  empresa_dados={{
                    nome_empresa: item.nome_empresa,
                    codigo_empresa: item.codigo_empresa
                  }}
                  valor_porcentagem={{
                    porcentagem: item.porcentagem
                  }}
                />
              </ItemEstilizado>
          ))}
        </Carousel>
      </CardEmpresaContainer>
    </EmpresasRecentesContainer>
  );
}

/*
export function EmpresasRecentes() {
  const [data, setData] = useState<DataProps[]>([]);
  
  useEffect(() => {
    setData(favoritos);
  }, []);

  return (
    <EmpresasRecentesContainer>
      <TituloContainer>
        <img src={stats_graph} alt="stats_graph" />
        <p>Empresas recentes</p>
        <div>
          <BotaoSeta icon={<MdKeyboardArrowLeft size={30} />} />
          <BotaoSeta icon={<MdKeyboardArrowRight size={30} />} />
        </div>
      </TituloContainer>
      <CardEmpresaContainer>
        <ItemEstilizado>
          <Item
            exibeBotaoFavorito={true}
            logo_empresa={{
              src: favoritos[3].src,
              alt: favoritos[3].alt
            }}
            empresa_dados={{
              nome_empresa: favoritos[3].nome_empresa,
              codigo_empresa: favoritos[3].codigo_empresa
            }}
            valor_porcentagem={{
              porcentagem: favoritos[3].porcentagem
            }}
          />
        </ItemEstilizado>
        <ItemEstilizado>
          <Item
            exibeBotaoFavorito={true}
            logo_empresa={{
              src: favoritos[6].src,
              alt: favoritos[6].alt
            }}
            empresa_dados={{
              nome_empresa: favoritos[6].nome_empresa,
              codigo_empresa: favoritos[6].codigo_empresa
            }}
            valor_porcentagem={{
              porcentagem: favoritos[6].porcentagem
            }}
          />
        </ItemEstilizado>
      </CardEmpresaContainer>
    </EmpresasRecentesContainer>
  );
}
*/