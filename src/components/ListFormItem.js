function ListFormItem({ item, category, user, setUser }) {
  function updateState(newItems) {
    if (newItems.length === 0) newItems = ' ';

    setUser({
      ...user,
      [category]: newItems,
    });
  }

  function updateItem(event) {
    const { value } = event.target;

    let newWeights = [];
    let newNames = Object.keys(user[category]).map((foo) => {
      newWeights.push(user[category][foo].weight);
      if (foo === item) {
        foo = value;
        return value;
      } else {
        return foo;
      }
    });

    let newItems = createItems(newNames, newWeights);

    updateState(newItems);
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') updateItem(event);
  }

  function onClick(event) {
    //update to take into account object
    let newWeights = [];
    let newNames = Object.keys(user[category]).filter((foo) => {
      if (foo !== item) {
        newWeights.push(user[category][foo].weight);
      }
      return foo !== item;
    });
    let newItems = createItems(newNames, newWeights);
    updateState(newItems);
    //figure out why this line is necessary
    event.preventDefault();
  }

  return (
    <div className="col-end-3">
      <input
        className="w-10/12 s:w-11/12 mt-1 sm:mt-0 text-sm text-gray-900 ring-1 ring-red-700 rounded-lg p-1"
        type="text"
        key={item}
        name={item}
        // using defaultValue to keep this input editable
        defaultValue={item}
        onBlur={updateItem}
        onKeyPress={onKeyPress}
      />
      <button className="ml-2" name={item} value={item} onClick={onClick}>
        x
      </button>
    </div>
  );
}

function createItems(names, weight) {
  let newItems = {};
  names.forEach((newName, i) => {
    newItems[newName] = { name: newName, weight: weight[i] };
  });
  return newItems;
}

export default ListFormItem;
