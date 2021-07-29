export interface DataEmpresa {
  symbol: string;
  companyName: string;
  latestPrice: number
}

/*
Quote
  HTTP REQUEST => GET /stock/{symbol}/quote/{field}
  JSON RESPONSE => {
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

Company
  HTTP REQUEST => GET /stock/{symbol}/company
  JSON RESPONSE => {
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