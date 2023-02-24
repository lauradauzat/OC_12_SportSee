import React from 'react';
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts';

function ActiviteQuotidienne() {
  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  

  return (
    <div className="actquot white-bg">
      <BarChart width={1100} height={200} data={data}>
      <Legend />
              <Tooltip />
        <Bar dataKey="pv" fill="#282D30" yAxisId="left" barSize={10} />
        <Bar dataKey="uv" fill="#E60000" yAxisId="right"  barSize={10}/>
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <CartesianGrid strokeDasharray="3 3 " />is 

      
        
      </BarChart>
    </div>
  );
}

export default ActiviteQuotidienne;
