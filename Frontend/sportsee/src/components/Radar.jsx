import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

function RadarChartComponent() {
  const values = {
    userId: 18,
    kind: {
      1: 'cardio',
      2: 'energy',
      3: 'endurance',
      4: 'strength',
      5: 'speed',
      6: 'intensity'
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
      [kindName]: d.value
    };
  });

  return (
    <div className='radar dark-bg'>
    <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    </ResponsiveContainer>
    </div>
  );
}

export default RadarChartComponent;
