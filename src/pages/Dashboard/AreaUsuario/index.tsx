// import styled from "styled-components";
import avatar from "../../../assets/images/avatar.png";
import { ItemFavoritado } from "../../../components/Item";
// import twitter from "../../../assets/images/twitter.svg";
// import amazon from "../../../assets/images/amazon.svg";
// import starbuucks from "../../../assets/images/starbuucks.svg";
import { favoritos } from "../../../utils/apis/api_favoritos";
import { Dropdown } from "../../../components/Dropdown";
// import { DropdownBotao, UsuarioDropdownAvatar, UsuarioDropdownNome, DropdownSeta } from "../../../components/Dropdown";

// const AreaUsuarioBox = styled.div`
//   background-color: transparent;
//   width: 100%;
// `;

// const AreaListaFavoritos = styled.div``;

export function AreaUsuario() {
  return (
    <Dropdown
      avatarSrc={avatar}
      avatarAlt="Avatar usuario"
      usuarioNome="João da Silva Almeida Magalhães"
    >
      <>
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
      </>
    </Dropdown>
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
