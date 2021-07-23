import twitter from "../../assets/images/twitter.svg";
import amazon from "../../assets/images/amazon.svg";
import starbuucks from "../../assets/images/starbuucks.svg";
import adobe from "../../assets/images/adobe.svg";
import apple from "../../assets/images/apple.svg";
import facebook from "../../assets/images/facebook.svg";
import microsoft from "../../assets/images/microsoft.svg";

export const favoritos = [
  {
    id: 1,
    favorito: true,
    src: starbuucks,
    alt: "starbuucks",
    nome_empresa: "Starbucks",
    codigo_empresa: "SBUX",
    porcentagem: -2.01,
    valor_acao: 55.42,
    valor_variacao_dinheiro: -9.21
  },
  {
    id: 2,
    favorito: true,
    src: amazon,
    alt: "amazon",
    nome_empresa: "Amazon",
    codigo_empresa: "AMZN",
    porcentagem: 10.0,
    valor_acao: 200.00,
    valor_variacao_dinheiro: 10.00
  },
  {
    id: 3,
    favorito: true,
    src: twitter,
    alt: "twitter",
    nome_empresa: "Twitter",
    codigo_empresa: "TWTR",
    porcentagem: 15.8,
    valor_acao: 302.60,
    valor_variacao_dinheiro: 16.00
  },
  {
    id: 4,
    favorito: true,
    src: facebook,
    alt: "facebook",
    nome_empresa: "Facebook",
    codigo_empresa: "FB",
    porcentagem: 2.3,
    valor_acao: 164.88,
    valor_variacao_dinheiro: 2.09
  },
  {
    id: 5,
    favorito: true,
    src: microsoft,
    alt: "microsoft",
    nome_empresa: "Microsoft",
    codigo_empresa: "MSFT",
    porcentagem: -0.03,
    valor_acao: 265.42,
    valor_variacao_dinheiro: -0.09
  },
  {
    id: 6,
    favorito: true,
    src: adobe,
    alt: "adobe",
    nome_empresa: "Adobe",
    codigo_empresa: "ADBE",
    porcentagem: -2.81,
    valor_acao: 78.20,
    valor_variacao_dinheiro: -1.99
  },
  {
    id: 7,
    favorito: true,
    src: apple,
    alt: "apple",
    nome_empresa: "Apple",
    codigo_empresa: "AAPL",
    porcentagem: -0.12,
    valor_acao: 450.99,
    valor_variacao_dinheiro: -1.19
  },
];
