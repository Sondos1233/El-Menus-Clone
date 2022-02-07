
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import store from './store/store'
function App() {
  return (
    <>
     <Provider store={store}>
      <Navbar/>
      </Provider>
    </>
  );
}

export default App;
