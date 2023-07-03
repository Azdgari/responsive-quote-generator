import './styles.css'
import QuoteGenerator from './components/quote-generator/quote-generator'
import Greeting from './components/greeting/greeting'
import MoreButton from './components/more-button/more-button'
import CurrentTime from './components/current-time/current-time'
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
            < CurrentLocation />
          </div>
          <MoreButton />
        </div>
      </div>
    </body>
  )
}