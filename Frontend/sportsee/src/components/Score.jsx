import React from 'react';
import PropTypes from 'prop-types';

import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

function Score({scorePct,rest}) {
  //const score = props.score;
  //console.log(scorePct,rest);

 /*  const scorePct = score * 100; 
  console.log(scorePct);
  const rest = 100 - scorePct; */

  const data = [
    { name: 'Score', value: scorePct },
    { name: 'Rest', value: rest }
  ];
  const COLORS = ['#FF0000', 'white'];

  const renderLabel = ({ cx, cy, value }) => (
    <text 
      x={cx} 
      y={cy} 
      textAnchor="middle" 
      dominantBaseline="central"
      style={{ fontSize: '15px' }}
    >
      <tspan id="scoreNum" x={cx} dy="-25px">{`${scorePct}%`}</tspan>
      <tspan className="grey" x={cx} dy="25px">de votre objectif</tspan>
    </text>
  );
  

  return (
    <>
    
    <div className="score white-bg">
    <h2 className='scoreH2'>Score</h2>
    <ResponsiveContainer width="100%" height="100%">
      <PieChart  width={50} height={50} >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius='70%'
          outerRadius='85%'
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

Score.propTypes = {
  scorePct: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired,
};

export default Score;
