import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

function DureeSession(props) {
  const sessions = props.sessions;
  
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    

    const transformedSessions = sessions.map(session => {
        const dayOfWeek = daysOfWeek[session.day-1];
        return {
          ...session,
          day: dayOfWeek
        };
      });

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
    <LineChart width={300} height={300} data={transformedSessions} style={{ fontFamily: 'Roboto' }}>
    <XAxis dataKey="day" tickCount={7}/>
    <YAxis hide={true} />
     <Tooltip content={<CustomTooltip />} />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
   </LineChart>
    </div>

  );
}

export default DureeSession;
