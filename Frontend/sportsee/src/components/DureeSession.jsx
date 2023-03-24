import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { LineChart, XAxis, YAxis, Tooltip, Line, ResponsiveContainer } from 'recharts';

/**

DureeSession component renders a line chart displaying the average duration of user sessions for each day of the week.
@component
@param {Object[]} props.sessions - An array of objects containing information about the average duration of user sessions for each day of the week.
@param {string} props.sessions[].day - The day of the week for which the average duration of user sessions is being displayed.
@param {number} props.sessions[].sessionLength - The average duration of user sessions for the given day of the week.
@returns {JSX.Element} - Returns the DureeSession component.
*/


function DureeSession(props) {
  const data = props.sessions;

  //CustomTooltip is a component that appears when the user hovers over a data point on the line chart.
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
    <div className="session " style={{background: 'linear-gradient(to right, #d11313 75%, #b61515 25%)'}}>
      <div className='real'>
        <h2>Durée moyenne des sessions</h2>
        <ResponsiveContainer >
          <LineChart data={data} style={{ fontFamily: 'Roboto' }}>
            <XAxis dataKey="day" tickCount={7}  />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" dot={false} />
          </LineChart>
        
        </ResponsiveContainer>
      </div>
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
