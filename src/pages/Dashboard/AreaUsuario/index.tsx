import styled from "styled-components";
import avatar from "../../../assets/images/avatar.png";
import { ItemFavoritado } from "../../../components/Item";
// import twitter from "../../../assets/images/twitter.svg";
// import amazon from "../../../assets/images/amazon.svg";
// import starbuucks from "../../../assets/images/starbuucks.svg";
import { favoritos } from "../../../utils/apis/api_favoritos";
import { Dropdown } from "../../../components/Dropdown";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
// import { DropdownBotao, UsuarioDropdownAvatar, UsuarioDropdownNome, DropdownSeta } from "../../../components/Dropdown";

const AreaUsuarioBox = styled.div`
  background-color: #FFFFFF;
  width: 100%;
`;

const AreaListaFavoritos = styled.div`
  margin-top: 32px;
`;

const EmpresasFavoritasTitulo = styled.div`
  font-family: Graphik;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  color: #14171A;
  margin-top: 0px;
  margin-bottom: 32px;
  margin-left: 32px;
  margin-right: 32px;
  display: flex;

  span {
    padding-left: 11.64px;
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

export function AreaUsuario() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    setData(favoritos);
  }, []);

  return (
    <AreaUsuarioBox>
      <Dropdown
        avatarSrc={avatar}
        avatarAlt="Avatar usuario"
        usuarioNome="João da Silva Almeida Magalhães"
      />
      <AreaListaFavoritos>
        <EmpresasFavoritasTitulo>
          <AiFillStar
            size={24}
            color={'#0047BB'}
          />
          <span>Empresas favoritas</span>
        </EmpresasFavoritasTitulo>
        {
          data.map((item, index) => {
            return (
              <ItemFavoritado
                key={index}
                exibeBotaoFavorito={false}
                favoritado={item.favorito}
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
                idFavorito={item.id}
              />
            );
          })
        }
      </AreaListaFavoritos>
    </AreaUsuarioBox>
  );
}

/* <DropdownBotao>
  <UsuarioDropdownAvatar src={avatar} alt="Avatar usuario" />
  <UsuarioDropdownNome>João da Silva Almeida Magalhães</UsuarioDropdownNome>
  <DropdownSeta />
</DropdownBotao> */
/*
export function AreaUsuario() {
  return (
    <AreaUsuarioBox>
      <DropdownBotao>
        <UsuarioDropdownAvatar src={avatar} alt="Avatar usuario" />
        <UsuarioDropdownNome>João da Silva Almeida Magalhães</UsuarioDropdownNome>
        <DropdownSeta />
      </DropdownBotao>
      <AreaListaFavoritos>
        {
          favoritos.map((item, index) => {
            return (
              <ItemFavoritado
                key={index}
                favoritado={item.favorito}
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
                idFavorito={item.id}
              />
            );
          })
        }
      </AreaListaFavoritos>
    </AreaUsuarioBox>
  );
}
*/

/*
  <ItemFavoritado
    logo_empresa={{
      src: twitter,
      alt: "twitter"
    }}
    empresa_dados={{
      nome_empresa: "TWTR",
      codigo_empresa: "Twitter"
    }}
    valor_porcentagem={{
      porcentagem: 15.8
    }}
  />
  <ItemFavoritado
    logo_empresa={{
      src: amazon,
      alt: "amazon"
    }}
    empresa_dados={{
      nome_empresa: "AMZN",
      codigo_empresa: "Amazon"
    }}
    valor_porcentagem={{
      porcentagem: 10.0
    }}
  />
  <ItemFavoritado
    logo_empresa={{
      src: starbuucks,
      alt: "starbuucks"
    }}
    empresa_dados={{
      nome_empresa: "SBUX",
      codigo_empresa: "Starbucks"
    }}
    valor_porcentagem={{
      porcentagem: -2.01
    }}
  />
*/
