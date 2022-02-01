
import './App.css';
import Home from './Components/Home/Home';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  return (
    <>
    <Provider store={store}>
     
    </Provider>

    </>
  );
}

export default App;
