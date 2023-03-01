import React from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts';

function DureeSession() {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const sessions =  [
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 23
        },
        {
            day: 3,
            sessionLength: 45
        },
        {
            day: 4,
            sessionLength: 50
        },
        {
            day: 5,
            sessionLength: 0
        },
        {
            day: 6,
            sessionLength: 0
        },
        {
            day: 7,
            sessionLength: 60
        }
    ]

    const transformedSessions = sessions.map(session => {
        const dayOfWeek = daysOfWeek[session.day-1];
        return {
          ...session,
          day: dayOfWeek
        };
      });
      

  return (
    <div className="session red-bg">
    <LineChart width={300} height={300} data={transformedSessions}>
    <XAxis dataKey="day" tickCount={7}/>
        <YAxis hide={true} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
   </LineChart>
    </div>

  );
}

export default DureeSession;
