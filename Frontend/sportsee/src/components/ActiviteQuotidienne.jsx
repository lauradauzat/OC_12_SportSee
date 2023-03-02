import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

function ActiviteQuotidienne() {
  const sessionsData = [
    {
      day: '2020-07-01',
      kilograms: 80,
      calories: 240,
    },
    {
      day: '2020-07-02',
      kilograms: 80,
      calories: 220,
    },
    {
      day: '2020-07-03',
      kilograms: 81,
      calories: 280,
    },
    {
      day: '2020-07-04',
      kilograms: 81,
      calories: 290,
    },
    {
      day: '2020-07-05',
      kilograms: 80,
      calories: 160,
    },
    {
      day: '2020-07-06',
      kilograms: 78,
      calories: 162,
    },
    {
      day: '2020-07-07',
      kilograms: 76,
      calories: 390,
    },
  ];

  const data = sessionsData.map((session) => ({
    name: parseInt(session.day.split('-')[2]),
    kg: session.kilograms,
    kal: session.calories,
  }));


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
        
      
      <BarChart data={data} barGap={20} >
 
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

export default ActiviteQuotidienne;
