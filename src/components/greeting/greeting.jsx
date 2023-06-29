import { ReactComponent as MoonIcon } from './icon-moon.svg';
import './greeting.css';

const Greeting = () => {
  return (
    <div className="greeting">
      <MoonIcon className="moon-icon" />
      <h2 className="greeting-text">GOOD EVENING</h2>
    </div>
  )
}

export default Greeting