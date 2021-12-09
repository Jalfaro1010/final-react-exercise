// 2A
import MCUShows from "./mcu-shows/MCUShows";

// 5A
const releaseDates = {
  wandaVision: 'January 2021',
  falconWinter: 'March 2021',
  loki: 'June 2021',
  whatIf: 'August 2021',
  hawkeye: 'November 2021'
};

function App() {
  return (
    <div>
      {/* 2B */}
      <h1>FINAL REACT EXERCISE</h1>
      {/* 2C and 5B */}
      <MCUShows dates={releaseDates} />
    </div>
  );
}

export default App;