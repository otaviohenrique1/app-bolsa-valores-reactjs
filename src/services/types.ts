import { api } from "./api";

interface ExemploApiProps {
  symbol: string;
  type: 'chart' | 'company' | 'quote';
  conteudo: string;
  opcoes?: string
}

const apiKey = process.env.REACT_APP_API_KEY;

export function exemploApi({ symbol, type, conteudo, opcoes }: ExemploApiProps) {
  return api.get(`${symbol}/${type}/${conteudo}?token=${apiKey}${opcoes || ''}`);
};

// exemploApi({
//   symbol: 'AAPL',
//   type: 'chart',
//   conteudo: 'date/20210730'
// })
// .then(() => {})
// .catch(() => {});

/*
# Exemplo da endpoint (URL)
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

export interface DataHistoricalPrice2 {
  symbol: string;
  close: number;
  date: Date;
}

export interface DataHistoricalPrices2 {
  data: DataHistoricalPrice2[];
}

/* Historical Prices
[
  {
    "close": 116.59,
    "high": 117.49,
    "low": 116.22,
    "open": 116.57,
    "symbol": "AAPL",
    "volume": 46691331,
    "id": "HISTORICAL_PRICES",
    "key": "AAPL",
    "subkey": "",
    "date": "2020-11-27",
    "updated": 1606746790000,
    "changeOverTime": 0,
    "marketChangeOverTime": 0,
    "uOpen": 116.57,
    "uClose": 116.59,
    "uHigh": 117.49,
    "uLow": 116.22,
    "uVolume": 46691331,
    "fOpen": 116.57,
    "fClose": 116.59,
    "fHigh": 117.49,
    "fLow": 116.22,
    "fVolume": 46691331,
    "label": "Nov 27, 20",
    "change": 0,
    "changePercent": 0
  },
  // { ... }
]
*/
export interface DataCompany2 {
  symbol: string;
  companyName: string;
}

/* Company
{
  "symbol": "AAPL",
  "companyName": "Apple Inc.",
  "exchange": "NASDAQ",
  "industry": "Telecommunications Equipment",
  "website": "http://www.apple.com",
  "description": "Apple, Inc. engages in the design, manufacture, and marketing of mobile communication, media devices, personal computers, and portable digital music players. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak on April 1, 1976 and is headquartered in Cupertino, CA.",
  "CEO": "Timothy Donald Cook",
  "securityName": "Apple Inc.",
  "issueType": "cs",
  "sector": "Electronic Technology",
  "primarySicCode": 3663,
  "employees": 132000,
  "tags": [
    "Electronic Technology",
    "Telecommunications Equipment"
  ],
  "address": "One Apple Park Way",
  "address2": null,
  "state": "CA",
  "city": "Cupertino",
  "zip": "95014-2083",
  "country": "US",
  "phone": "1.408.974.3123"
}
*/
export interface DataQuote2 {
  symbol: string;
  companyName: string;
  latestPrice: number;
  high: number;
  low: number;
  change: number;
  changePercent: number;
}
/* Quote
{
  "symbol": "BAC",
  "companyName": "Bank Of America Corp.",
  "primaryExchange": "NEW YORK STOCK EXCHANGE, INC.",
  "calculationPrice": "close",
  "open": 28.81,
  "openTime": 1607437801023,
  "openSource": "official",
  "close": 28.81,
  "closeTime": 1607461201852,
  "closeSource": "official",
  "high": 29.12,
  "highTime": 1607461198592,
  "highSource": "15 minute delayed price",
  "low": 27.68,
  "lowTime": 1607437803011,
  "lowSource": "15 minute delayed price",
  "latestPrice": 28.81,
  "latestSource": "Close",
  "latestTime": "December 8, 2020",
  "latestUpdate": 1607461201852,
  "latestVolume": 33820759,
  "iexRealtimePrice": 28.815,
  "iexRealtimeSize": 100,
  "iexLastUpdated": 1607461192396,
  "delayedPrice": 28.82,
  "delayedPriceTime": 1607461198592,
  "oddLotDelayedPrice": 28.82,
  "oddLotDelayedPriceTime": 1607461198391,
  "extendedPrice": 28.93,
  "extendedChange": 0.04,
  "extendedChangePercent": 0.00137,
  "extendedPriceTime": 1607471631362,
  "previousClose": 29.49,
  "previousVolume": 42197768,
  "change": -0.16,
  "changePercent": -0.0045,
  "volume": 33820759,
  "iexMarketPercent": 0.01709376134658947,
  "iexVolume": 578127,
  "avgTotalVolume": 60029202,
  "iexBidPrice": 0,
  "iexBidSize": 0,
  "iexAskPrice": 0,
  "iexAskSize": 0,
  "iexOpen": 28.815,
  "iexOpenTime": 1607461192355,
  "iexClose": 28.815,
  "iexCloseTime": 1607461192355,
  "marketCap": 2502673458439,
  "peRatio": 14.23,
  "week52High": 34.68,
  "week52Low": 17.50,
  "ytdChange": -0.1573975163337491,
  "lastTradeTime": 1607461198587,
  "isUSMarketOpen": false
}
*/