
import React, { useEffect, useState } from 'react';
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';
import { generateChartData, type ChartData } from '@/lib/cryptoData';

interface PriceChartProps {
  data: ChartData[];
  increasing: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  tooltipVisible?: boolean;
  height?: number | string;
}

const PriceChart: React.FC<PriceChartProps> = ({
  data: initialData,
  increasing,
  showXAxis = false,
  showYAxis = false,
  tooltipVisible = false,
  height = '100%'
}) => {
  const [data, setData] = useState<ChartData[]>(initialData.length ? initialData : []);
  
  useEffect(() => {
    if (initialData.length === 0) {
      setData(generateChartData(30));
    }
  }, [initialData]);

  const color = increasing ? '#3DC786' : '#ea384c';

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
      >
        {showXAxis && (
          <XAxis 
            dataKey="name" 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            tickFormatter={(value) => value}
          />
        )}
        {showYAxis && (
          <YAxis 
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            tickFormatter={(value) => `$${value}`}
            domain={['dataMin', 'dataMax']}
          />
        )}
        {tooltipVisible && (
          <Tooltip
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontSize: '12px'
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
            labelFormatter={(name) => `Date: ${name}`}
          />
        )}
        <defs>
          <linearGradient id={`colorValue-${increasing ? 'up' : 'down'}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          fillOpacity={1}
          fill={`url(#colorValue-${increasing ? 'up' : 'down'})`}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
