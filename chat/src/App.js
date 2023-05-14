import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Join from './components/Join/Join';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" Component={Join} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

