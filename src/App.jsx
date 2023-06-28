export default function App() {
  return (
    <body>
      <div className="background">
        <div className="upper-container">
          <div className="quotes">
            <h1>Quotes</h1>
          </div>
        </div>
        <div className="lower-container">
          <div className="clock-container">
            <h2 className="greeting">
              Good morning, its currently
            </h2>
            <h1 className="clock">
              11:30
            </h1>
            <h2 className="location">
              in London, UK
            </h2>
          </div>
          <div className="button-container">
            <button className="button">More</button>
          </div>
        </div>
      </div>
    </body>
  )
}