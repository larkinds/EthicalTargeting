/* global chrome */
import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/form';
import Info from './components/info';

function App() {
  const [user, setUser] = useState({
    profileName: 'Larkin',
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

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        let tempUser = {}
        tempUser.profileName = userInfo['profileName'];
        tempUser.age = userInfo['age'];
        tempUser.gender = userInfo['gender'];
        tempUser.occupation = userInfo['occupation'];
        tempUser.interests = userInfo['interests'];
        tempUser.dislikes =  userInfo['dislikes'];
        
        setUser(tempUser);
    });
  }, []);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['profileName'] = user.profileName;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.profileName]);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['age'] = user.age;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.age]);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['gender'] = user.gender;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.gender]);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['occupation'] = user.occupation;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.occupation]);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['interests'] = user.interests;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.interests]);

  useEffect(() => {
    // Update the document title using the browser API
      chrome.storage.sync.get(function(userInfo) {
        userInfo['dislikes'] = user.dislikes;
        chrome.storage.sync.clear();
        chrome.storage.sync.set(userInfo); 
    });
  },[user.dislikes]);

  return (
    <div className="bg-gray-100 h-full w-full flex flex-col">
      <header className="bg-green-800 text-lg md:text-2xl font-large text-gray-900">
        <h1 className="text-white m-4">Ethical Targeting</h1>
      </header>
      <div className="bg-white shadow overflow-hidden w-3/4 md:w-2/3 sm:rounded-lg self-center my-10">
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
