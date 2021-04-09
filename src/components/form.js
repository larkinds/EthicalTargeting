import TextForm from './TextForm';
import ListForm from './ListForm';

function Form({ user, setUser, setInfo }) {
  const userItems = Object.keys(user);

  const onSubmitForm = (event) => {
    event.preventDefault();
    setInfo(true);
  };

  return (
    <div className="border-t border-gray-200">
      <div className="m-5 flex flex-row justify-end">
        <button onClick={(event) => onSubmitForm(event)}>
          <svg
            className="h-5 w-5 text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
      {userItems.map((item) => {
        return typeof user[item] === 'object' ? (
          <ListForm key={item} user={user} setUser={setUser} category={item} />
        ) : (
          <TextForm key={item} user={user} setUser={setUser} item={item} />
        );
      })}
    </div>
  );
}

export default Form;
