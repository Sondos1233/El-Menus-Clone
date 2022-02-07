
import './App.css';
import Career from './Components/Career/Career';
import description from './Components/Job/description';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      
      <Router>
      <Route path="/Career" component={Career}/>
      <Route path="/description/:Name" component={description}/>
      </Router>
    </>
  );
}

export default App;
