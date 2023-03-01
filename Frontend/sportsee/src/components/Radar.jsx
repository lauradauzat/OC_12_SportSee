import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function RadarChartComponent() {
  const values = {
    userId: 18,
    kind: {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    },
    data: [
      {
        value: 200,
        kind: 1
      },
      {
        value: 240,
        kind: 2
      },
      {
        value: 80,
        kind: 3
      },
      {
        value: 80,
        kind: 4
      },
      {
        value: 220,
        kind: 5
      },
      {
        value: 110,
        kind: 6
      }
    ]
  };

  const data = values.data.map(d => {
    const kindName = values.kind[d.kind];
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
  
          <Radar name="test" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarChartComponent;
