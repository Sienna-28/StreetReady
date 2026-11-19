/*
  Editorial source registry for Markets & Deals.
  Discovery sources are always presented as links; material deal facts should
  be confirmed against the issuer's investor-relations release or SEC filing.
*/
window.StreetReadyNewsSources = {
  priority: [
    { name: 'Bloomberg', role: 'Breaking markets, global economics, deals, and data', url: 'https://www.bloomberg.com/markets' },
    { name: 'The Wall Street Journal', role: 'Corporate finance, U.S. policy, M&A, and executive moves', url: 'https://www.wsj.com/news/business' },
    { name: 'Financial Times', role: 'Global macroeconomics, Europe, and international business', url: 'https://www.ft.com/markets' },
    { name: 'CNBC', role: 'Fast-moving market coverage and earnings', url: 'https://www.cnbc.com/finance/' }
  ],
  marketTracking: [
    { name: 'Yahoo Finance', role: 'Quotes, watchlists, earnings calendars, and headlines', url: 'https://finance.yahoo.com/' },
    { name: 'MarketWatch', role: 'Daily movers, economic calendar, and market commentary', url: 'https://www.marketwatch.com/' }
  ],
  context: [
    { name: 'The Economist', role: 'Global macro, policy, and long-term trends', url: 'https://www.economist.com/finance-and-economics' },
    { name: 'Forbes', role: 'Business leadership, wealth, markets, and technology', url: 'https://www.forbes.com/business/' },
    { name: 'Kiplinger', role: 'Personal finance, taxes, retirement, and forecasts', url: 'https://www.kiplinger.com/' }
  ],
  primaryVerification: [
    { name: 'SEC EDGAR', role: 'Filings and official company disclosures', url: 'https://www.sec.gov/edgar/search/' },
    { name: 'Company Investor Relations', role: 'Transaction announcements and disclosed terms', url: null }
  ]
};
