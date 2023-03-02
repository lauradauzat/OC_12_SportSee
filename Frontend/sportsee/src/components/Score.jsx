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
      <tspan id="scoreNum" x={cx} dy="-30px">{`${scorePct}%`}</tspan>
      <tspan class="grey" x={cx} dy="30px">de votre objectif</tspan>
    </text>
  );
  

  return (
    <>
    
    <div className="score white-bg">
    <h2 className='scoreH2'>Score</h2>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width="100%" height="100%" >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={120}
          fill="#f5f5f5"
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
          label={renderLabel}
          strokeLinecap="round"
          cornerRadius={40}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
    </>
  
  );
}

export default Score;
