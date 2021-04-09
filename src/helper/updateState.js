function updateState(category, newItems, setUser) {
  if (newItems.length === 0) newItems = [''];
  setUser((user) => ({
    ...user,
    [category]: newItems,
  }));
}

export default updateState;
