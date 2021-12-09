// FINAL REACT EXERCISE

// 1A
import './MCUShows.css';

// 1B and 5C
function MCUShows({dates}){
  // 1C
  return(
    // 4A
    <div className="MCUShows">
      {/* 3A */}
      <h1 style={{fontFamily: 'Georgia', textDecoration: 'underline'}}>Disney+</h1>
      <h2>MCU Show Release Dates</h2>
      {/* 5C */}
      <p>WandaVision: {dates.wandaVision}</p>
      <p>The Falcon and the Winter Soldier: {dates.falconWinter}</p>
      <p>Loki: {dates.loki}</p>
      <p>What If...?: {dates.whatIf}</p>
      <p>Hawkeye: {dates.hawkeye}</p>
    </div>
  );
}

// 1D
export default MCUShows;