import { ReactComponent as MoonIcon } from './icon-moon.svg';
import './greeting.css';

const Greeting = ({ time }) => {

  if (!time) {
    return null;
  }

  let greeting
  const currentHour = parseInt(time.slice(0, 2), 10);
  if (currentHour >= 5 && time < 12) {
    greeting = 'GOOD MORNING'
  }
  else if (currentHour >= 12 && time < 18) {
    greeting = 'GOOD AFTERNOON'
  }
  else {
    greeting = 'GOOD EVENING'
  }

  return (
    <div className="greeting">
      <MoonIcon className="moon-icon" />
      <h2 className="greeting-text">{greeting}</h2>
    </div>
  )
}

export default Greeting