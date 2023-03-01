import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

function Score() {
  const score = 0.3;
  const scorePct = score * 100; 
  const rest = 100 - scorePct;

  const data = [
    { name: 'Score', value: scorePct },
    { name: 'Rest', value: rest }
  ];
  const COLORS = ['#FF0000', '#f5f5f5'];

  const renderLabel = ({ cx, cy, value }) => (
    <text 
      x={cx} 
      y={cy} 
      textAnchor="middle" 
      dominantBaseline="central"
      style={{ fontSize: '20px' }}
    >
      <tspan x={cx} dy="-1em">{`${value}%`}</tspan>
      <tspan x={cx} dy="1em">de votre objectif</tspan>
    </text>
  );
  

  return (
    <div className="score white-bg">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            innerRadius={90}
            outerRadius={110}
            fill="#f5f5f5"
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
            label={renderLabel}
           
            strokeLinecap="round"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
