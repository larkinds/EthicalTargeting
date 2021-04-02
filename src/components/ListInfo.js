function ListInfo({ user, item }) {
  let values = Object.keys(user[item]).map((value) => {
    return value;
  });

  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
      <p className="text-sm font-medium text-gray-500">{item}</p>
      {values.map((value) => {
        return (
          <p
            className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-end-3 p-1"
            key={value}
          >
            {value}
          </p>
        );
      })}
    </div>
  );
}

export default ListInfo;
