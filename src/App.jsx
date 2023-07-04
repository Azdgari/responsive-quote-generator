import './styles.css'
import QuoteGenerator from './components/quote-generator/quote-generator.jsx'
import Greeting from './components/greeting/greeting.jsx'
import MoreButton from './components/more-button/more-button.jsx'
import CurrentTime from './components/current-time/current-time.jsx'
import CurrentLocation from './components/current-location/current-location.jsx'

export default function App() {

  return (
    <body>
      <div className="background">
        < QuoteGenerator />
        <div className="lower-container">
          <div className="clock-container">
            < Greeting time={CurrentTime} />
            <div className="clock-and-timezone">
              < CurrentTime />
            </div>
            <h2 className="location">
              In < CurrentLocation />
            </h2>
          </div>
          <MoreButton />
        </div>
      </div>
    </body>
  )
}