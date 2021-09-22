import {Topbar} from './Components/Topbar/Topbar';
import {Sidebar} from './Components/Sidebar/Sidebar';
import {Home} from './Pages/Home/Home';
import './app.css';

function App() {
  return (
    <div className="App">
     <Topbar/>
    <div className='container'>
      <Sidebar />
      <Home />
    </div>
    </div>
  );
}

export default App;
