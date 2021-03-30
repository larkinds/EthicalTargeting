import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Info from './components/info';

function App() {
  const [user, setUser] = useState({
    name: 'Larkin',
    interests: ['Steak', 'Arugula', 'Lemons', 'Parmesan'],
  });

  const [info, setInfo] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Ethical Targeting</h2>
        {info ? (
          <Info user={user} setInfo={setInfo} />
        ) : (
          <Form user={user} setUser={setUser} setInfo={setInfo} />
        )}
      </header>
    </div>
  );
}

export default App;
