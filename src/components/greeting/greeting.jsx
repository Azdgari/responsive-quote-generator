import { ReactComponent as MoonIcon } from './icon-moon.svg';
import './greeting.css';

const Greeting = ({ time }) => {

  if (!time || typeof time !== 'string') {
    return null;
  }

  let greeting
  const currentHour = parseInt(time.slice(0, 2), 10);
  console.log('Current Time:', currentHour)
  console.log('Greeting:', greeting)
  if (currentHour >= 5 && currentHour < 12) {
    greeting = 'GOOD MORNING'
  }
  else if (currentHour >= 12 && currentHour < 18) {
    greeting = 'GOOD AFTERNOON'
  }
  else {
    greeting = 'GOOD EVENING'
  }
  console.log('Greeting Updated:', greeting)

  return (
    <div className="greeting">
      <MoonIcon className="moon-icon" />
      <h2 className="greeting-text">{greeting}</h2>
    </div>
  )
}

export default Greeting