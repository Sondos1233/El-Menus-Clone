import './App.css';
import Userprofile from './Components/userProfile/userProfile'
import AccountSetting from './Components/accountSetting/accountSetting';
import{ BrowserRouter as  Router, Route} from 'react-router-dom';



function App() {
  return (
    <>

      <Router>
       
        <Route exact path="/" element={<Userprofile />} />
        <Route path="/accountSetting" element={<AccountSetting />} />
       
      </Router>


    {/* <Userprofile /> */}
    {/* <AccountSetting /> */}

    </>
  );
}

export default App;
