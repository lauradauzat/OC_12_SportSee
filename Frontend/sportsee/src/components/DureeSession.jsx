import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

function DureeSession(props) {


  const data = props.sessions;



  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='custom-tooltip' style={{ fontFamily: 'Roboto', color:'black', backgroundColor:'white' }}>
          <p style={{ padding:'10px' }}> {`${payload[0].value} min`}</p>
        </div>
      )
    }
    return null
  }


  return (
    <div className="session red-bg">

        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer >
        <LineChart   data={data} style={{ fontFamily: 'Roboto' }}>
          <XAxis dataKey="day" tickCount={7} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
        </ResponsiveContainer>
      </div>

  );
  
}

DureeSession.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.exact({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default DureeSession;

