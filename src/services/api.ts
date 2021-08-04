import axios from "axios";
import { useState } from "react";

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
  baseURL: 'https://sandbox.iexapis.com/stable/stock/',
  // baseURL: 'https://cloud.iexapis.com/stable/stock/',
});

interface ExemploApiProps {
  symbol: string;
  type: 'chart' | 'company' | 'quote';
  conteudo?: string;
  opcoes?: string
}

export const apiKey = process.env.REACT_APP_API_KEY;

export function Api({ symbol, type, conteudo, opcoes }: ExemploApiProps) {
  return api.get(`${symbol}/${type}${conteudo || ''}?token=${apiKey}${opcoes || ''}`);
  // return api.get(`${symbol}/${type}/${conteudo}?token=${apiKey}${opcoes || ''}`);
};

export function Api2(data: string) {
  return api.get(`${data}?token=${apiKey}`);
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
  // symbol: string; // codigo_empresa
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

export const DataHistoricalPriceInitialData: DataHistoricalPrice = {
  // symbol: '',
  close: 0,
  date: new Date(`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`)
};

export const DataHistoricalPricesInitialData = [];

export const DataCompanyInitialData: DataCompany = {
  symbol: '',
  companyName: ''
};

export const DataQuoteInitialData: DataQuote = {
  symbol: '',
  companyName: '',
  latestPrice: 0,
  high: 0,
  low: 0,
  changePercent: 0
};

export function BuscaEmpresa(symbol: string) {
  const [dataCompany, setDataCompany] = useState<DataCompany>(DataCompanyInitialData);
  const [dataQuote, setDataQuote] = useState<DataQuote>(DataQuoteInitialData);
  const [dataHistoricalPricesGrafico, setHistoricalPricesGrafico] = useState<DataHistoricalPrice[]>(DataHistoricalPricesInitialData);
  const [dataError, setDataError] = useState<any[]>([]);
  const [data, setData] = useState<DataProps>();

  Api({
    symbol: symbol,
    type: 'company'
  }).then((data) => {
    setDataCompany(data.data)
  }).catch((error) => {
    setDataError(error);
  });

  Api({
    symbol: symbol,
    type: 'quote'
  }).then((data) => {
    setDataQuote(data.data)
  }).catch((error) => {
    setDataError(error);
  });

  Api({
    symbol: symbol,
    type: 'chart',
    conteudo: '/date/5d'
  }).then((data) => {
    setHistoricalPricesGrafico(data.data)
  }).catch((error) => {
    setDataError(error);
  });
  
  setData({
    nome_empresa: dataCompany.companyName,
    codigo_empresa: dataCompany.symbol,
    valor_acao: dataQuote.latestPrice,
    porcentagem: dataQuote.changePercent,
    valor_variacao_dinheiro: (dataQuote.high - dataQuote.low),
    data: dataHistoricalPricesGrafico,
    /*
    data: dataHistoricalPricesGrafico.map((item) => {
      return {
        name: item.date,
        uv: item.close
      };
    }),
    */
  });

  return {
    data: data,
    error: dataError
  };
}

export interface DataProps {
  nome_empresa: string;
  codigo_empresa: string;
  porcentagem: number;
  valor_acao: number;
  valor_variacao_dinheiro: number;
  data: DataHistoricalPrice[];
  /*
  data: {
    name: string;
    uv: number;
  }[];
  */
}

export const DataPropsInitialData = {
  nome_empresa: '',
  codigo_empresa: '',
  porcentagem: 0,
  valor_acao: 0,
  valor_variacao_dinheiro: 0,
  data: []
}
