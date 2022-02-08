import './App.css';
import Userprofile from './Components/userProfile/userProfile';
import AccountSetting from './Components/accountSetting/accountSetting';
import{ BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Routes>
            <Route element={ <Userprofile />} path="/userProfile" exact />        
            <Route element={<AccountSetting />} path="/accountSetting" exact />         
          </Routes>
      </Router>

    {/* <Userprofile />
    <AccountSetting /> */}

    </>
  );
}

export default App;
