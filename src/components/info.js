import ListInfo from './ListInfo';
import TextInfo from './TextInfo';

function Info({ user, setInfo }) {
  const setInfoButton = (event) => {
    event.preventDefault();
    setInfo(false);
  };

  return (
    <div className="border-t border-gray-200">
      <div className="m-5 flex flex-row justify-end">
        <button onClick={(event) => setInfoButton(event)}>
          <svg
            className="h-5 w-5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
      </div>
      {Object.keys(user).map((item) => {
        return typeof user[item] === 'object' ? (
          <ListInfo user={user} item={item} />
        ) : (
          <TextInfo user={user} item={item} />
        );
      })}
    </div>
  );
}

export default Info;
