import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component that displays a pie chart representing a score and a rest value.
 *
 * @param {Object} props - The props object.
 * @param {number} props.scorePct - The score percentage value to be displayed.
 * @param {number} props.rest - Value used to have the score displayed properly. It is the rest of the score percentage to 100.
 * @returns {JSX.Element} - A React component.
 */

import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

function Score({scorePct,rest}) {


  const data = [
    { name: 'Score', value: scorePct },
    { name: 'Rest', value: rest }
  ];

  const blank = 
  [
    { name: 'Blank', value: 100 },
  ];

  const COLORS = ['#FF0000', '#f5f5f5'];

  const renderLabel = ({ cx, cy, value }) => (
    <text 
      x={cx} 
      y={cy} 
      textAnchor="middle" 
      dominantBaseline="central"
      style={{ fontSize: '15px' }}
    >
      <tspan id="scoreNum" x={cx} dy="-20px">{`${scorePct}%`}</tspan>
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
            <Cell key={`cell-${index}`} fill={COLORS[index]}  stroke={COLORS[index]}/>
          ))}
        </Pie>
        <Pie
          data={blank}
          cx="50%"
          cy="50%"
          innerRadius='0%'
          outerRadius='69%'
          paddingAngle={0}
          dataKey="value"
          labelLine={false}
          label={renderLabel}
          key="blank"
          fill="white"
          stroke="white"
          
        >
    
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
