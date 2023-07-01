import { useState, useEffect } from 'react';
import Greeting from '../greeting/greeting';

const CurrentTime = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip');
        if (!response.ok) {
          throw new Error('Error fetching time');
        }
        const data = await response.json();
        console.log('API response data:', data)
        const dateTimeString = data.datetime;
        const extractedTime = dateTimeString.slice(11, 16);
        setTime(extractedTime);
      } catch (error) {
        console.log(error);
        setTime('Error fetching time');
      }
    }
    fetchData();
  }
    , []);

  console.log(time)

  return (
    <div>
      {<Greeting time={time} />}
      <h1 className="clock">
        {time}
      </h1>
    </div>
  )
}

export default CurrentTime;