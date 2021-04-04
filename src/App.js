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
    <div className="bg-gray-100 h-full flex flex-col">
      <header className=" bg-green-800 text-lg md:text-2xl font-large text-gray-900 ml-4">
        <h1 className="text-white m-4">Ethical Targeting</h1>
      </header>
      <div className="bg-white shadow overflow-hidden w-3/4 md:w-1/2 sm:rounded-lg self-center my-10">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Header
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        {info ? (
          <Info user={user} setInfo={setInfo} />
        ) : (
          <Form user={user} setUser={setUser} setInfo={setInfo} />
        )}
      </div>
    </div>
  );
}

export default App;
