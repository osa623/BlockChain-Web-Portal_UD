
export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  image: string;
}

export const cryptoData: CryptoAsset[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 41235.78,
    change24h: 2.34,
    volume24h: 23457890123,
    marketCap: 789123456789,
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=026"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 2456.91,
    change24h: 3.21,
    volume24h: 12356789012,
    marketCap: 289123456789,
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=026"
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 1.23,
    change24h: -1.12,
    volume24h: 2356789012,
    marketCap: 39123456789,
    image: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=026"
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 110.45,
    change24h: 5.67,
    volume24h: 5356789012,
    marketCap: 39523456789,
    image: "https://cryptologos.cc/logos/solana-sol-logo.svg?v=026"
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 427.96,
    change24h: 0.87,
    volume24h: 1656789012,
    marketCap: 70123456789,
    image: "https://cryptologos.cc/logos/bnb-bnb-logo.svg?v=026"
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    price: 0.5623,
    change24h: -0.54,
    volume24h: 3056789012,
    marketCap: 27123456789,
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=026"
  }
];

export interface ChartData {
  name: string;
  value: number;
}

export const generateChartData = (days: number = 30): ChartData[] => {
  const data: ChartData[] = [];
  const now = new Date();
  let price = 40000 + Math.random() * 2000;
  
  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Add some random movement to the price
    const change = (Math.random() - 0.5) * 500;
    price += change;
    price = Math.max(price, 35000); // Ensure price doesn't go below 35000
    
    data.push({
      name: `${date.getMonth() + 1}/${date.getDate()}`,
      value: parseFloat(price.toFixed(2))
    });
  }
  
  return data;
};

export const marketStatistics = [
  { title: "Market Cap", value: "$1.96T", change: 2.3 },
  { title: "Trading Volume", value: "$97.5B", change: -1.7 },
  { title: "BTC Dominance", value: "43.1%", change: 0.3 },
  { title: "Active Cryptocurrencies", value: "21,152", change: 0 }
];

export const featuresData = [
  {
    title: "Real-Time Tracking",
    description: "Track your crypto investments in real-time with immediate price updates and portfolio analytics.",
    icon: "LineChart"
  },
  {
    title: "Secure Transactions",
    description: "Execute trades with enterprise-grade security protocols and multi-factor authentication.",
    icon: "Shield"
  },
  {
    title: "Advanced Analytics",
    description: "Leverage powerful analytical tools to make informed decisions with market insights.",
    icon: "BarChart"
  },
  {
    title: "Multi-Wallet Support",
    description: "Connect and manage multiple crypto wallets in one unified interface.",
    icon: "Wallet"
  }
];
