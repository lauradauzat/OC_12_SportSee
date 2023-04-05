import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


/**
 * A component that renders a radar chart using the Recharts library.
 *
 * @param {Object} props - The props object.
 * @param {Array<Object>} props.performance - An array of objects representing performance data. Each object should have a `name` (string) and a `value` (number) property.
 * @returns {JSX.Element} A React component that renders a responsive radar chart.
 */

function RadarChartComponent(props) {

const data = props.performance; 


  return (
    <div className='radar dark-bg'>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data} >
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
