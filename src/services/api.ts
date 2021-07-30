import axios from "axios";

/*
  Exemplo da endpoint (URL)
  https://cloud.iexapis.com/stable/stock/AAPL/financials/2?token=YOUR_TOKEN_HERE&period=annual
*/

const api = axios.create({
  // baseURL: 'https://sandbox.iexapis.com/stable/stock/',
  baseURL: 'https://cloud.iexapis.com/stable/stock/',
});

export default api;

/*
  Historical Prices => /stock/{symbol}/chart/{range}/{date}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/5d?token=YOUR_TOKEN_HERE
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/chart/date/20210730?token=YOUR_TOKEN_HERE
  Company => /stock/{symbol}/company
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/company?token=YOUR_TOKEN_HERE
  Quote => /stock/{symbol}/quote/{field}
    Exemplo => https://cloud.iexapis.com/stable/stock/AAPL/quote/latestPrice?token=YOUR_TOKEN_HERE
*/