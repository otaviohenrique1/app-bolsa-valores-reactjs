import axios from "axios";

/*
  Exemplo da endpoint (URL)
  https://cloud.iexapis.com/stable/stock/AAPL/financials/2?token=YOUR_TOKEN_HERE&period=annual
*/

/*
  Historical Prices => /stock/{symbol}/chart/{range}/{date}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/5d?token=YOUR_TOKEN_HERE
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/date/20210730?token=YOUR_TOKEN_HERE
  Company => /stock/{symbol}/company
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/company?token=YOUR_TOKEN_HERE
  Quote => /stock/{symbol}/quote/{field}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/quote/latestPrice?token=YOUR_TOKEN_HERE
*/

export const api = axios.create({
  // baseURL: 'https://sandbox.iexapis.com/stable/stock/',
  baseURL: 'https://cloud.iexapis.com/stable/stock/',
});

interface ExemploApiProps {
  symbol: string;
  type: 'chart' | 'company' | 'quote';
  conteudo?: string;
  opcoes?: string
}

const apiKey = process.env.REACT_APP_API_KEY;

export function Api({ symbol, type, conteudo, opcoes }: ExemploApiProps) {
  return api.get(`${symbol}/${type}${conteudo || ''}?token=${apiKey}${opcoes || ''}`);
  // return api.get(`${symbol}/${type}/${conteudo}?token=${apiKey}${opcoes || ''}`);
};

/* Exemplo Company
  Api({
    symbol: 'AAPL',
    type: 'company'
  })
*/

/* Exemplo Quote
  Api({
    symbol: 'AAPL',
    type: 'quote'
  })
*/

/* Exemplo company
  Api({
    symbol: 'AAPL',
    type: 'chart',
    conteudo: '/date/5d'
  })
*/

export interface DataHistoricalPrice {
  // grafico
  symbol: string; // codigo_empresa
  close: number; // uv => no grafico
  date: Date; // name => no grafico
}

export interface DataHistoricalPrices {
  // grafico
  data: DataHistoricalPrice[];
}

export interface DataCompany {
  symbol: string; // codigo_empresa
  companyName: string; // nome_empresa
}

export interface DataQuote {
  symbol: string; // codigo_empresa
  companyName: string; // nome_empresa
  latestPrice: number; // valor_acao
  high: number;
  low: number;
  // high - low = valor_variacao_dinheiro
  changePercent: number; // porcentagem
}
