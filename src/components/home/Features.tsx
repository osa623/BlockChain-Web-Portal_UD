
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  ChevronRight, 
  LineChart, 
  Shield, 
  Wallet,
  Zap 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { featuresData } from '@/lib/cryptoData';

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart': return <LineChart className="h-6 w-6" />;
      case 'Shield': return <Shield className="h-6 w-6" />;
      case 'BarChart': return <BarChart3 className="h-6 w-6" />;
      case 'Wallet': return <Wallet className="h-6 w-6" />;
      default: return <Zap className="h-6 w-6" />;
    }
  };

  return (
    <section className="py-20 px-6 bg-crypto-pattern bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for Modern Traders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience cutting-edge tools and features designed to elevate your crypto trading journey, all in one elegant platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="crypto-card bg-card neo-morphism"
            >
              <div className="mb-6 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <Button variant="ghost" className="p-0 flex items-center text-accent hover:text-accent/80">
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 glass-morphism rounded-3xl p-10 md:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Crypto Journey?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of traders who have already discovered the power of SleekChain. Create your account in minutes and start trading with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-gradient rounded-full" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="rounded-full" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="relative">
                <motion.div
                  className="w-full aspect-square max-w-md mx-auto relative"
                  animate={{ 
                    y: [0, -20, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                >
                  <div className="neo-morphism rounded-3xl p-8 h-full flex flex-col justify-center items-center">
                    <div className="mb-6">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="40" r="40" fill="url(#paint0_linear)" />
                        <path d="M40 20L50 40L40 60L30 40L40 20Z" fill="white" />
                        <defs>
                          <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#3671E9" />
                            <stop offset="1" stopColor="#7B61FF" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Start with as little as $10</h3>
                    <p className="text-center text-muted-foreground">
                      Begin your crypto investment journey with any amount you're comfortable with.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -z-10 -bottom-10 -left-10 w-32 h-32 rounded-full bg-crypto-blue/10 blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3] 
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
