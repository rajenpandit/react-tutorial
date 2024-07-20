import './App.css';

import Header from './components/Header';
import Count from './components/Count';

function App() {
  return (
    <div className="App">
      <Header user='User1' address='xyz'/>
      <Count></Count>
    </div>
  );
}

export default App;
