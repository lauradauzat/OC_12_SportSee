import React, { useState } from 'react';
import { LineChart, XAxis, YAxis, Tooltip, Line } from 'recharts';

function DureeSession(props) {
  const [backgroundColor, setBackgroundColor] = useState('rgb(255, 0, 0)'); // initial background color

  const data = props.sessions;

 
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
/* 
  const handleClick = (event) => {
    const x = event.nativeEvent.offsetX; // get x coordinate of click event
    const chartX = event.currentTarget.querySelector('.recharts-wrapper').getBoundingClientRect().left; // get x position of closest line chart
    const width = event.currentTarget.querySelector('.recharts-wrapper').clientWidth; // get width of closest line chart
    const percentage = ((x - chartX) / width) * 100; // calculate percentage
    const darkRed = `linear-gradient(to right, transparent ${percentage}%, #d11313 ${percentage}%)`; // create gradient background with alpha based on percentage
    setBackgroundColor(darkRed); // update background color
  } */
  
  return (
    <div className="session red-bg">
 {/*      <div className='bgMagicContainer' onClick={handleClick} style={{ background: backgroundColor }}> */}
        <h2>Durée moyenne des sessions</h2>
        <LineChart width={300} height={300} data={data} style={{ fontFamily: 'Roboto' }}>
          <XAxis dataKey="day" tickCount={7} />
          <YAxis hide={true} />
          <Tooltip content={<CustomTooltip />} />
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" />
        </LineChart>
      </div>
/*     </div> */
  );
  
}

export default DureeSession;
