import api from "./api";

interface ExemploApiProps {
  symbol: string;
  type: 'chart' | 'company' | 'quote';
  conteudo: string;
  opcoes?: string
}

const apiKey = process.env.REACT_APP_API_KEY;

export function exemploApi({ symbol, type, conteudo, opcoes }: ExemploApiProps) {
  return api.get(`${symbol}/${type}/${conteudo}?token=${apiKey}${opcoes || ''}`);
    // .then(() => {})
    // .catch(() => {});
};

exemploApi({
  symbol: 'AAPL',
  type: 'chart',
  conteudo: 'date/20210730'
})
.then(() => {})
.catch(() => {});

/*
#Exemplo da endpoint (URL)
  https://cloud.iexapis.com/stable/stock/AAPL/financials/2?token=YOUR_TOKEN_HERE&period=annual
# Exemplos:
  Historical Prices => /stock/{symbol}/chart/{range}/{date}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/5d?token=YOUR_TOKEN_HERE
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/date/20210730?token=YOUR_TOKEN_HERE
  Company => /stock/{symbol}/company
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/company?token=YOUR_TOKEN_HERE
  Quote => /stock/{symbol}/quote/{field}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/quote/latestPrice?token=YOUR_TOKEN_HERE
*/

export interface DataEmpresa {
  symbol: string;
  companyName: string;
  latestPrice: number
}
