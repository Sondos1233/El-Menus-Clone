import './App.css';
import Navbar from './Components/Navbar/Navbar';
import store from './store/store'
import UserProfile  from './Components/userProfile/userProfile';
import AccountSetting from './Components/accountSetting/accountSetting'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';
function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <Switch> 
         <Fragment>
          <Navbar/>
          <Route  path="/" exact />        
          <Route  path="/userProfile"  component={UserProfile} />        
          <Route exact path="/accountSetting" component={AccountSetting}  />
        </Fragment>
        </Switch>
      </Router>          
    </Provider>


    </>
  );
}

export default App;
