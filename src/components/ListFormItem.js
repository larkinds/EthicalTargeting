function ListFormItem({ item, category, user, setUser }) {
  function updateState(newItems) {
    if (newItems.length === 0) newItems = '';

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

    console.log({ newNames });
    console.log({ newWeights });

    let newItems = createItems(newNames, newWeights);

    updateState(newItems);
  }

  function onKeyPress(event) {
    if (event.key === 'Enter') updateItem(event);
  }

  function onClick(event) {
    const { value } = event.target;

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
    <span name={category} value={item}>
      <input
        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 ring-1 sm:rounded-lg p-1"
        type="text"
        key={item}
        name={item}
        // using defaultValue to keep this input editable
        defaultValue={item}
        onBlur={updateItem}
        onKeyPress={onKeyPress}
      />
      <button
        name={item}
        value={item}
        onClick={onClick}
        style={{ border: '2px solid red' }}
      >
        x
      </button>
    </span>
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
