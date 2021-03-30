function Form({ user, setUser, setInfo }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
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

  const onSubmitForm = (event) => {
    event.preventDefault();
    setInfo(true);
  };

  return (
    <div className="userInfoPanel">
      <form onSubmit={(event) => onSubmitForm(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={(event) => handleChange(event)}
          />
        </label>
        {user.interests.map((interest) => (
          <label>
            {interest}
            <input
              type="text"
              name={'singleInterest%' + interest}
              value={interest}
              onChange={(event) => handleChange(event)}
            />
          </label>
        ))}
        <div>
          <input type="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
