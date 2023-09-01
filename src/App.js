import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Header from './common/components/Header';
import Routing from './Routing';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
       <Routing/>
      </BrowserRouter>
    </div>
  );
}

export default App;
