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
    <label className="bg-white px-4 py-5 grid grid-cols-2 gap-4 sm:px-6">
      <span className="text-sm font-medium text-gray-500">{item}</span>
      <input
        className="mt-1 sm: mt-0 text-sm text-gray-900 ring-1 ring-red-700 rounded-lg p-1"
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
