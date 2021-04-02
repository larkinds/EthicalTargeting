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
    interests: {
      Steak: { name: 'steak', weight: 1 },
      Arugula: { name: 'arugula', weight: 2 },
      Lemons: { name: 'lemons', weight: 3 },
      Parmesan: { name: 'parmesan', weight: 1 },
    },
    dislikes: {
      racism: {
        name: 'racism',
        weight: 5,
      },
      invalidation: {
        name: 'invalidation',
        weight: 2,
      },
      other: {
        name: ' other',
        weight: 1,
      },
    },
  });

  const [info, setInfo] = useState(true);

  return (
    <div className="bg-yellow-100 h-full">
      <header className="text-lg md:text-2xl font-large text-gray-900 ml-4">
        <h1 className="m-4">Ethical Targeting</h1>
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
