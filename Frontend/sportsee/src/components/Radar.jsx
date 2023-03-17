import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


function RadarChartComponent(props) {

const data = props.performance; 
console.log(data);

  return (
    <div className='radar dark-bg'>
      <ResponsiveContainer width="90%" height="90%">
        <RadarChart cx="50%" cy="50%" outerRadius="90%" data={data}>
        <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis dataKey="name" />
  
          <Radar name="radar" dataKey="value" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6}  />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

RadarChartComponent.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default RadarChartComponent;
