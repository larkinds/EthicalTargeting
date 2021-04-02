function Form({ user, setUser, setInfo }) {
<<<<<<< Updated upstream
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name });
    console.log({ value });
    let possibleArr = name.split('%');

    if (possibleArr.length > 1) {
      let interestChanged = possibleArr[1];
      let updatedInterests = user.interests.map((interest) => {
        if (interest === interestChanged) {
          return interestChanged;
        }
        return interest;
      });
      setUser({
        ...user,
        interest: updatedInterests,
      });
    } else {
      setUser({
        ...user,
        [name]: value,
      });
    }
  };
=======
  const userItems = Object.keys(user);
>>>>>>> Stashed changes

  const onSubmitForm = (event) => {
    event.preventDefault();
    setInfo(true);
  };

  return (
<<<<<<< Updated upstream
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
      <form
        className="border-t border-gray-200"
        onSubmit={(event) => onSubmitForm(event)}
      >
        {Object.keys(user).map((item) => {
=======
    <>
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
>>>>>>> Stashed changes
          return typeof user[item] === 'object' ? (
            <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span className="text-sm font-medium text-gray-500">{item}</span>
              {user[item].map((subItem) => {
                return (
                  <input
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ring-1 sm:rounded-lg p-1"
                    type="text"
                    key={subItem}
                    name={item}
                    value={subItem}
                    onChange={(event) => handleChange(event)}
                  />
                );
              })}
            </label>
          ) : (
            <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span className="text-sm font-medium text-gray-500">{item}</span>
              <input
                className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ring-1 sm:rounded-lg p-1"
                type="text"
                key={item}
                name={item}
                value={user[item]}
                onChange={(event) => handleChange(event)}
              />
            </label>
          );
        })}
<<<<<<< Updated upstream
        {/* <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <span className="text-sm font-medium text-gray-500">Name:</span>
          <input
            className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"
            type="text"
            name="name"
            value={user.name}
            onChange={(event) => handleChange(event)}
          />
        </label> */}
        {/* {user.interests.map((interest) => (
          <label>
            {interest}
            <input
              type="text"
              name={'singleInterest%' + interest}
              defaultValue={interest}
              onChange={(event) => handleChange(event)}
            />
          </label>
        ))} */}
      </form>
    </div>
=======
      </div>
    </>
>>>>>>> Stashed changes
  );
}

export default Form;
