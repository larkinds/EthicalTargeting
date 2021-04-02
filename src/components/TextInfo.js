function TextInfo({ user, item }) {
  return (
    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
      <p className="text-sm font-medium text-gray-500" key={item}>
        {item}
      </p>
      <p className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 p-1">
        {user[item]}
      </p>
    </div>
  );
}

export default TextInfo;