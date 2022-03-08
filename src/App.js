import './App.css';
import Userprofile from './Components/userProfile/userProfile'
import AccountSetting from './Components/accountSetting/accountSetting';
import{ BrowserRouter as  Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <Routes>
        <Route exact path="/" element={<Userprofile />} ></Route>
        <Route path="/accountSetting" element={<AccountSetting />} ></Route>
        </Routes>
      </Router>


    {/* <Userprofile /> */}
    {/* <AccountSetting /> */}

    </>
  );
}

export default App;
