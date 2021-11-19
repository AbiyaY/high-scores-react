import './App.css';
import Header from "./Header";
import HighScoreTable from './HighScoreTable';
import allCountryScores from './scores';

function App() {
  return (
    <div className="App">
      
      <Header />
      <HighScoreTable scores={ allCountryScores } />
    </div>
  );
}

export default App;
