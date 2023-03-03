import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function RadarChartComponent(props) {

  const performance = props.performance; 

  const data = performance.data.map(d => {
    const kindName = performance.kind[d.kind];
    return {
      name: kindName,
      value: d.value,
      [kindName]: d.value
    };
  });


  return (
    <div className='radar dark-bg'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="name" />
  
          <Radar name="radar" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarChartComponent;
