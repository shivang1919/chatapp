import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat'
function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" Component={Join} />
        <Route exact path="/Chat" Component={Chat} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

