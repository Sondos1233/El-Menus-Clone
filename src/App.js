
import './App.css';
import Footer from './Components/Footer/footer';
import { Provider } from 'react-redux';
import store from './store/store'
function App() {
  return (
    <>
     <Provider store={store}>
      <Footer/>
      </Provider>


    </>
  );
}

export default App;
