import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

function ActiviteQuotidienne(props) {

  const activity = props.activity;

  

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip' style={{padding: "5px", backgroundColor:'red'}}>
          <p style={{ color: '#ffffffd2',  padding:'5px' }}>{`${payload[0].value}kg`}</p>
          <p style={{ color: '#ffffffd2',  padding:'5px' }}>{`${payload[1].value}kCal`}</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="actquot white-bg">
      <h2>Activitées Quotidienne</h2>
      <ResponsiveContainer width="100%" height="100%">
        
      
      <BarChart data={activity} barGap={20} >
 
         <Tooltip content={<CustomTooltip />} />
        <Legend width={100} wrapperStyle={{ top: -70, right: 220, lineHeight: '40px' }} />
        <Bar dataKey="kg"  name="Poids (kg)" fill="#282D30" yAxisId="kg" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="kal"  name="Calories brûlées (kCal)"  fill="#E60000" yAxisId="kal" barSize={10} radius={[10, 10, 0, 0]} />
        <XAxis dataKey="name" />
       
        <YAxis yAxisId="kal" tickCount={3} id='kal' />
        <YAxis yAxisId="kg" orientation="right" tickCount={3} />

        <CartesianGrid  vertical={false}  strokeDasharray="3 3"/>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );

}

ActiviteQuotidienne.propTypes = {
  activity: PropTypes.arrayOf(
    PropTypes.exact({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ActiviteQuotidienne;
