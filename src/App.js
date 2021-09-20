import {Topbar} from './Components/Topbar/Topbar';
import {Sidebar} from './Components/Sidebar/Sidebar';
import './app.css';

function App() {
  return (
    <div className="App">
     <Topbar/>
    <div className='container'>
      <Sidebar />
      <div className='others'>other pages</div>
    </div>
    </div>
  );
}

export default App;
