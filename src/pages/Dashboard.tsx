
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowDown, 
  ArrowUp, 
  BarChart3, 
  Clock, 
  CreditCard, 
  DollarSign, 
  Download,
  LineChart, 
  Plus, 
  Wallet 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PriceChart from '@/components/ui/PriceChart';
import { cryptoData, marketStatistics } from '@/lib/cryptoData';

const Dashboard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen"
    >
      <Navbar />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, your portfolio overview</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
              {/* Portfolio Summary */}
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Portfolio Value</h2>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-end gap-6 mb-8">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
                    <h3 className="text-3xl font-bold mb-1">$128,456.89</h3>
                    <div className="flex items-center text-crypto-teal">
                      <ArrowUp className="h-4 w-4 mr-1" />
                      <span>+$5,242.15 (4.26%)</span>
                    </div>
                  </div>
                  <div className="flex space-x-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                      <div className="flex items-center text-crypto-teal font-medium">
                        <ArrowUp className="h-4 w-4 mr-1" />
                        <span>+2.34%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Assets</p>
                      <p className="font-medium">8</p>
                    </div>
                  </div>
                </div>
                
                <div className="h-64">
                  <PriceChart 
                    data={[]}
                    increasing={true}
                    showXAxis={true}
                    showYAxis={true}
                    tooltipVisible={true}
                  />
                </div>
              </div>
              
              {/* Assets */}
              <div className="glass-morphism rounded-2xl p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Your Assets</h2>
                  <Button className="btn-gradient rounded-full" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Asset
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {cryptoData.slice(0, 4).map((crypto) => (
                    <div key={crypto.id} className="flex items-center justify-between p-4 rounded-xl bg-background/50 hover:bg-background transition-colors">
                      <div className="flex items-center">
                        <img 
                          src={crypto.image} 
                          alt={crypto.name} 
                          className="w-10 h-10 mr-4"
                        />
                        <div>
                          <h4 className="font-medium">{crypto.name}</h4>
                          <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${crypto.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
                        <div className={`text-sm ${crypto.change24h >= 0 ? 'text-crypto-teal' : 'text-destructive'}`}>
                          {crypto.change24h >= 0 ? (
                            <span className="flex items-center justify-end">
                              <ArrowUp className="h-3 w-3 mr-1" />
                              {crypto.change24h.toFixed(2)}%
                            </span>
                          ) : (
                            <span className="flex items-center justify-end">
                              <ArrowDown className="h-3 w-3 mr-1" />
                              {Math.abs(crypto.change24h).toFixed(2)}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <Button variant="ghost" className="text-accent">
                    View All Assets
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Actions */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Plus, text: "Buy" },
                    { icon: DollarSign, text: "Sell" },
                    { icon: CreditCard, text: "Deposit" },
                    { icon: Wallet, text: "Withdraw" }
                  ].map((action, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="h-24 flex flex-col gap-2 neo-morphism"
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <action.icon size={20} />
                      </div>
                      <span>{action.text}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Market Statistics */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">Market Statistics</h2>
                <div className="space-y-5">
                  {marketStatistics.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <p className="text-muted-foreground">{stat.title}</p>
                      <div className="flex items-center">
                        <p className="font-medium mr-2">{stat.value}</p>
                        {stat.change !== 0 && (
                          <span className={`text-xs px-2 py-1 rounded-full ${stat.change > 0 ? 'bg-crypto-teal/10 text-crypto-teal' : 'bg-destructive/10 text-destructive'}`}>
                            {stat.change > 0 ? '+' : ''}{stat.change}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent Transactions */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-6">Recent Transactions</h2>
                <div className="space-y-4">
                  {[
                    { type: "Buy", asset: "Bitcoin", amount: "0.025 BTC", value: "$1,034.51", time: "2h ago", icon: Plus, iconClass: "bg-crypto-teal/10 text-crypto-teal" },
                    { type: "Sell", asset: "Ethereum", amount: "1.5 ETH", value: "$3,685.42", time: "1d ago", icon: DollarSign, iconClass: "bg-destructive/10 text-destructive" },
                    { type: "Deposit", asset: "USD", amount: "$5,000", value: "$5,000", time: "3d ago", icon: CreditCard, iconClass: "bg-accent/10 text-accent" }
                  ].map((tx, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-background/50 transition-colors">
                      <div className={`w-10 h-10 rounded-full ${tx.iconClass} flex items-center justify-center`}>
                        <tx.icon size={18} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{tx.type} {tx.asset}</h4>
                          <p className="font-medium">{tx.value}</p>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <p>{tx.amount}</p>
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{tx.time}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Button variant="ghost" className="text-accent">
                    View All Transactions
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Dashboard;
