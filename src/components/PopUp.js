import { Switch } from '@headlessui/react';
import { useState } from 'react';

function PopUp() {
  let [toggle, setToggle] = useState(false);

  return (
    <div className="bg-white h-screen flex flex-col">
      <div className="bg-gray-800 h-24 w-auto flex justify-between content-center">
        <h1 className="text-white font-l self-center ml-5">
          Ethical Targeting
        </h1>
        <a href="/Profile" target="_blank" className="h-7 w-7 mr-5 self-center">
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </a>
      </div>
      <div className="w-auto h-full border-2 flex flex-col justify-center">
        <div className="bg-gray-50 border-2 self-center w-72 h-auto p-6 m-5">
          <div className="flex justify-between items-center px-4 py-2">
            <h1>Do Not Track Website:</h1>
            {/* switch container */}
            <Switch
              onChange={() => setToggle(!toggle)}
              className={`flex items-center w-14 h-9 p-1 flex-shrink-0 rounded-full ease-in-out cursor-pointer focus:outline-none ${
                toggle ? 'bg-green-700' : 'bg-gray-100'
              }`}
            >
              <span
                className={`bg-white w-7 h-7 rounded-full shadow-md transition duration-200 transform  ${
                  toggle ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </Switch>
          </div>
        </div>
        <div className="bg-gray-50 border-2 self-center w-72 h-auto p-6 m-5 flex flex-col">
          <h1>Do Not Track Mode</h1>
          <div>
            <input className="w-" type="text" placeholder="30" />
            <label>Minutes</label>
          </div>
          <button className="bg-green-700 rounded text-white p-2 m-2">
            Start
          </button>
        </div>
        <div className="bg-gray-50 border-2 self-center w-72 h-auto p-6 m-5 flex justify-center">
          <button className="bg-green-700 rounded text-white p-2">
            Report an Issue
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
