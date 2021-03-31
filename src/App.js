import { useState } from 'react';
import './App.css';
import Form from './components/form';
import Info from './components/info';

function App() {
  const [user, setUser] = useState({
    name: 'Larkin',
    age: 28,
    gender: 'F',
    occupation: 'Software Engineer',
    region: '',
    interests: ['Steak', 'Arugula', 'Lemons', 'Parmesan'],
    dislikes: ['racism', 'invalidation', 'other'],
  });

  const [info, setInfo] = useState(true);

  return (
    <div className="bg-yellow-100 h-full">
      <header className="text-lg md:text-2xl font-large text-gray-900">
        <h1>Ethical Targeting</h1>
      </header>
      {info ? (
        <Info user={user} setInfo={setInfo} />
      ) : (
        <Form user={user} setUser={setUser} setInfo={setInfo} />
      )}
    </div>
  );
}

export default App;
