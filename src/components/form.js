function Form({ user, setUser, setInfo }) {
  let localState = { ...user };

  const handleChange = (event) => {
    const { name, value } = event.target;
    let possibleArr = name.split('%');

    if (possibleArr.length > 1) {
      let updatedInterests = user.interests.map((interest) => {
        if (interest === possibleArr[1]) {
          return value;
        }
        return interest;
      });
      localState[possibleArr[0]] = updatedInterests;
      return;
    } else {
      localState[name] = value;
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    setUser(localState);
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
      <form
        className="border-t border-gray-200"
        onSubmit={(event) => onSubmitForm(event)}
      >
        {Object.keys(user).map((item) => {
          return typeof user[item] === 'object' ? (
            <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <span className="text-sm font-medium text-gray-500">{item}</span>
              {user[item].map((subItem) => {
                return (
                  <input
                    className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ring-1 sm:rounded-lg p-1"
                    type="text"
                    key={subItem}
                    name={item + '%' + subItem}
                    // using defaultValue to keep this input editable while working around React's state mgmt
                    defaultValue={subItem}
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
                defaultValue={user[item]}
                onChange={(event) => handleChange(event)}
              />
            </label>
          );
        })}
      </form>
    </div>
  );
}

export default Form;
