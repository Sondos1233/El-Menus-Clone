

import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/footer';
import store from './store/store'
function App() {
  return (
    <>
     <Provider store={store}>

      <Navbar/>
      <Footer/>
      </Provider>



    </>
  );
}

export default App;
