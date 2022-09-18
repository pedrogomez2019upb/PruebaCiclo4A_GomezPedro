import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="main">
      <h2 className="main-header">CRUD Tickets MERN</h2>
      <div>
      
      </div>
      <div>
        <Create/>
      </div>
    </div>
    </Router>
  );
}

export default App;
