import TextItem from './TextItem';
import ListItem from './ListItems';

function Form({ user, setUser, setInfo }) {
  //   let localUser = { ...user };

  //   const handleChange = (event) => {
  //     const { name, value } = event.target;
  //     let possibleArr = name.split('%');

  //     if (possibleArr.length > 1) {
  //       let updatedInterests = user.interests.map((interest) => {
  //         if (interest === possibleArr[1]) {
  //           return value;
  //         }
  //         return interest;
  //       });
  //       localUser[possibleArr[0]] = updatedInterests;
  //       return;
  //     } else {
  //       localUser[name] = value;
  //     }
  //   };

  //   const handleClick = (event) => {
  //     const { name, value } = event.target;
  //     let tempArr = localUser[name].filter((foo) => foo !== value);
  //     localUser[name] = tempArr;
  //   };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setInfo(true);
  };

  return (
    <div className="bg-white shadow overflow-hidden  w-2/3 sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Header</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          <span className="float-left">Subheader</span>
          <span className="float-right">
            <button onClick={(event) => onSubmitForm(event)}>
              <svg
                className="h-5 w-5 text-gray-900 float-left"
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
          </span>
        </p>
      </div>
      <form className="border-t border-gray-200">
        {Object.keys(user).map((item) => {
          return typeof user[item] === 'object' ? (
            <ListItem user={user} setUser={setUser} item={item} />
          ) : (
            <TextItem user={user} setUser={setUser} item={item} />
          );
        })}
      </form>
    </div>
  );
}

export default Form;
