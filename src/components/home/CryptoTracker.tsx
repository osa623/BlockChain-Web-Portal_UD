
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowUp, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  SlidersHorizontal 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cryptoData, type CryptoAsset } from '@/lib/cryptoData';
import CryptoCard from '@/components/ui/CryptoCard';

const CryptoTracker = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{
    key: keyof CryptoAsset; 
    direction: 'ascending' | 'descending'
  }>({ key: 'marketCap', direction: 'descending' });

  const handleSort = (key: keyof CryptoAsset) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredCryptos = cryptoData
    .filter(crypto => 
      crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

  const getSortIcon = (key: keyof CryptoAsset) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? 
        <ChevronUp className="w-4 h-4" /> : 
        <ChevronDown className="w-4 h-4" />;
    }
    return null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="markets" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real-Time Cryptocurrency Tracker
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest crypto market movements. Track prices, volumes, and market capitalizations of the top cryptocurrencies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center"
        >
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              type="text"
              placeholder="Search cryptocurrencies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-full bg-secondary"
            />
          </div>
          <Button variant="outline" className="w-full md:w-auto">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="overflow-x-auto w-full"
        >
          <table className="w-full text-left">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 font-medium">#</th>
                <th className="px-4 py-3 font-medium">Asset</th>
                <th 
                  className="px-4 py-3 font-medium cursor-pointer flex items-center"
                  onClick={() => handleSort('price')}
                >
                  Price {getSortIcon('price')}
                </th>
                <th 
                  className="px-4 py-3 font-medium cursor-pointer flex items-center"
                  onClick={() => handleSort('change24h')}
                >
                  24h Change {getSortIcon('change24h')}
                </th>
                <th 
                  className="px-4 py-3 font-medium cursor-pointer flex items-center"
                  onClick={() => handleSort('marketCap')}
                >
                  Market Cap {getSortIcon('marketCap')}
                </th>
                <th className="px-4 py-3 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCryptos.map((crypto, index) => (
                <motion.tr 
                  key={crypto.id}
                  variants={itemVariants}
                  className="border-b last:border-b-0 hover:bg-secondary/50 transition-colors"
                >
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <img 
                        src={crypto.image} 
                        alt={crypto.name} 
                        className="w-8 h-8 mr-3"
                      />
                      <div>
                        <div className="font-medium">{crypto.name}</div>
                        <div className="text-muted-foreground text-sm">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium">
                    ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-4 py-4">
                    <span className={`flex items-center ${crypto.change24h >= 0 ? 'text-crypto-teal' : 'text-destructive'}`}>
                      {crypto.change24h >= 0 ? <ArrowUp className="mr-1 h-4 w-4" /> : <ArrowDown className="mr-1 h-4 w-4" />}
                      {Math.abs(crypto.change24h).toFixed(2)}%
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    ${(crypto.marketCap / 1000000000).toFixed(2)}B
                  </td>
                  <td className="px-4 py-4 text-right">
                    <Button className="rounded-full" variant="outline" size="sm">Trade</Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cryptoData.slice(0, 3).map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CryptoTracker;
