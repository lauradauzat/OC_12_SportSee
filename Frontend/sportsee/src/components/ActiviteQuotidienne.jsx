import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

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
    pv: session.kilograms,
    uv: session.calories,
  }));

  return (
    <div className="actquot white-bg">
      <BarChart width={1100} height={200} data={data}>
        <Legend />
        <Tooltip />
        <Bar dataKey="pv" fill="#282D30" yAxisId="left" barSize={10} radius={[10, 10, 0, 0]} />
        <Bar dataKey="uv" fill="#E60000" yAxisId="right" barSize={10} radius={[10, 10, 0, 0]} />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <CartesianGrid strokeDasharray="3 3 " />
      </BarChart>
    </div>
  );
}

export default ActiviteQuotidienne;
