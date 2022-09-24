import './App.css';
import Navbarcomp from './components/Navbarcomp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbarcomp/>
      <Home/>
    </div>
  );
}

export default App;
