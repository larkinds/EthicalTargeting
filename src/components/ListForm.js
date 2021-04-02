import ListFormItem from './ListFormItem';

function ListForm({ user, setUser, category }) {
  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
      <label className="text-sm font-medium text-gray-500"> {category}</label>
      {Object.keys(user[category]).map((item) => {
        return (
          <ListFormItem
            item={item}
            category={category}
            user={user}
            setUser={setUser}
          />
        );
      })}
    </div>
  );
}

export default ListForm;
