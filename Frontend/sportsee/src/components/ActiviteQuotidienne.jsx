import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

/**

React component for displaying daily activity information in a bar chart.
@param {Object} props - Component props
@param {Array<Object>} props.activity - Array of daily activity data
@param {string} props.activity[].name - Day of the week as a number
@param {number} props.activity[].kg - Weight in kilograms for the day
@param {number} props.activity[].kal - Calories burned for the day
@returns {JSX.Element} - Rendered React component
*/

function ActiviteQuotidienne(props) {

  const activity = props.activity;

  //CustomTooltip is a component that appears when the user hovers over a data point on the line chart.
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
        
      
      <BarChart  width={90} height={100} data={activity} barGap={20} margin={{ left: 20 }}>
 
         <Tooltip content={<CustomTooltip />} />
        <Legend width={90} wrapperStyle={{ top: -55, right: 220, lineHeight: '40px' }} />
        <Bar dataKey="kg"  name="Poids (kg)" fill="#282D30" yAxisId="kg" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="kal"  name="Calories brûlées (kCal)"  fill="#E60000" yAxisId="kal" barSize={10} radius={[10, 10, 0, 0]} />
        <XAxis dataKey="name" />
       
        <YAxis hide={true} yAxisId="kal" tickCount={3} id='kal'/>
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
      name: PropTypes.number.isRequired,
      kg: PropTypes.number.isRequired,
      kal: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ActiviteQuotidienne;
