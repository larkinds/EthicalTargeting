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
<<<<<<< Updated upstream
    <div className="bg-yellow-100 h-full">
      <header className="text-lg md:text-2xl font-large text-gray-900">
        <h1>Ethical Targeting</h1>
=======
    <div className="bg-blue-100 h-full flex flex-col">
      <header className="text-lg md:text-2xl font-large text-gray-900 ml-4">
        <h1 className="m-4">Ethical Targeting</h1>
>>>>>>> Stashed changes
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
