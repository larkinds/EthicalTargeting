function EmptyFormItem({ category, user, setUser }) {
  function updateState(newItems) {
    if (newItems.length === 0) newItems = ' ';

    setUser({
      ...user,
      [category]: newItems,
    });
  }

  function addItem(value) {
    console.log({ value });
    if (typeof value === 'string') {
      let newItem = { name: value, weight: 1 };
      let newItems = {
        ...user[category],
        [value]: newItem,
      };

      updateState(newItems);
    }
  }

  function onClick(event) {
    let value = document.getElementsByName('newItem')[0].innerText;
    console.log({ value });
    addItem(value);
    document.getElementsByName('newItem')[0].innerHTML = '';
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') {
      let value = document.getElementsByName('newItem')[0].innerHTML;
      console.log({ value });
      addItem(value);
      document.getElementsByName('newItem')[0].innerHTML = ' ';
    }
  }
  return (
    <div className="col-end-3">
      <div
        className="w-10/12 s:w-11/12 mt-1 sm:mt-0 text-sm text-gray-900 ring-1 ring-green-700 rounded-lg p-1"

        type="text"
        key="newItem"
        name="newItem"
        // using defaultValue to keep this input editable
        contenteditable="true"
        defaultValue=""
        onBlur={addItem}
        onKeyPress={onKeyPress}
      ></div>
      <button className="ml-2" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default EmptyFormItem;
