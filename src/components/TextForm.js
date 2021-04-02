function TextForm({ user, setUser, item }) {
  function updateState({ name, value }) {
    setUser({
      ...user,
      [name]: value,
    });
  }

  function onBlur(event) {
    updateState(event.target);
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') updateState(event.target);
  }

  return (
    <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
      <span className="text-sm font-medium text-gray-500">{item}</span>
      <input
        className="mt-1 text-sm text-gray-900 sm:mt-0 ring-1 sm:rounded-lg p-1"
        type="text"
        key={item}
        name={item}
        defaultValue={user[item]}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
      />
    </label>
  );
}

export default TextForm;
