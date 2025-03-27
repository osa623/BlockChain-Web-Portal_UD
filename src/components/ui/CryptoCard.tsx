
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { type CryptoAsset } from '@/lib/cryptoData';
import PriceChart from './PriceChart';

interface CryptoCardProps {
  crypto: CryptoAsset;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="crypto-card bg-card glass-morphism overflow-hidden"
    >
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img 
            src={crypto.image} 
            alt={crypto.name} 
            className="w-10 h-10 mr-3"
          />
          <div>
            <h3 className="font-bold">{crypto.name}</h3>
            <span className="text-sm text-muted-foreground">{crypto.symbol}</span>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-sm ${crypto.change24h >= 0 ? 'bg-crypto-teal/10 text-crypto-teal' : 'bg-destructive/10 text-destructive'}`}>
          <div className="flex items-center">
            {crypto.change24h >= 0 ? 
              <ArrowUp className="mr-1 h-3 w-3" /> : 
              <ArrowDown className="mr-1 h-3 w-3" />}
            {Math.abs(crypto.change24h).toFixed(2)}%
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-2xl font-bold">${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <div className="text-sm text-muted-foreground">
          Market Cap: ${(crypto.marketCap / 1000000000).toFixed(2)}B
        </div>
      </div>
      
      <div className="h-24 mb-2">
        <PriceChart 
          data={[]}
          increasing={crypto.change24h >= 0}
        />
      </div>
      
      <div className="pt-2 mt-auto">
        <button className="w-full py-2 rounded-xl bg-accent text-accent-foreground font-medium transition-colors hover:bg-accent/90">
          Trade
        </button>
      </div>
    </motion.div>
  );
};

export default CryptoCard;
