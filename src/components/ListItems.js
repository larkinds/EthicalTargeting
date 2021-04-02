function ListItems({ user, setUser, item }) {
  function handleChange() {}

  function handleClick() {}

  return (
    <label className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <span className="text-sm font-medium text-gray-500">{item}</span>
      {user[item].map((subItem) => {
        return (
          <span name={item} value={subItem}>
            <input
              className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ring-1 sm:rounded-lg p-1"
              type="text"
              key={subItem}
              name={item + '%' + subItem}
              // using defaultValue to keep this input editable while working around React's state mgmt
              defaultValue={subItem}
              onChange={(event) => handleChange(event)}
            />
            <button
              name={item}
              value={subItem}
              onClick={(event) => handleClick(event)}
            >
              x
            </button>
          </span>
        );
      })}
    </label>
  );
}

export default ListItems;
