
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart3, ShieldCheck, Wallet } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-28 pb-20 px-6 flex items-center bg-hero-pattern bg-no-repeat bg-cover overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-5"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Next Generation Crypto Platform
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Trade <span className="text-gradient">Cryptocurrencies</span> with Confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Experience seamless crypto trading with advanced tools, real-time analytics, and enterprise-grade security all in one elegant platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="btn-gradient rounded-full text-base py-6 px-8" size="lg">
                Start Trading
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full text-base py-6 px-8" size="lg">
                Explore Markets
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              {[
                { icon: BarChart3, text: "Real-time Analytics" },
                { icon: ShieldCheck, text: "Bank-grade Security" },
                { icon: Wallet, text: "Multi-wallet Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <item.icon size={20} />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto">
              <div className="w-full aspect-square max-w-md mx-auto relative">
                <motion.div
                  className="absolute inset-0 glass-morphism rounded-3xl shadow-xl overflow-hidden"
                  animate={{ 
                    boxShadow: [
                      "0 20px 40px rgba(0,0,0,0.1)", 
                      "0 30px 60px rgba(59,130,246,0.2)", 
                      "0 20px 40px rgba(0,0,0,0.1)"
                    ]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-crypto-blue/5 via-crypto-purple/5 to-crypto-teal/5"></div>
                  <div className="h-full flex flex-col justify-center items-center p-8">
                    <div className="w-16 h-16 rounded-full bg-crypto-blue flex items-center justify-center mb-6">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L15 9H9L12 2Z" fill="white" />
                          <path d="M12 22L9 15H15L12 22Z" fill="white" />
                          <path d="M2 12L9 9V15L2 12Z" fill="white" />
                          <path d="M22 12L15 15V9L22 12Z" fill="white" />
                        </svg>
                      </motion.div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Total Balance</h3>
                    <p className="text-4xl font-bold mb-6">$128,456.89</p>
                    <div className="w-full bg-background/10 h-0.5 mb-6"></div>
                    <div className="grid grid-cols-2 gap-4 w-full">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">24h Change</p>
                        <p className="text-lg font-medium text-crypto-teal">+2.34%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Assets</p>
                        <p className="text-lg font-medium">8</p>
                      </div>
                    </div>
                    <Button className="mt-6 w-full btn-gradient">View Portfolio</Button>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-crypto-purple/20 blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5] 
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-crypto-blue/20 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.7, 0.5] 
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
