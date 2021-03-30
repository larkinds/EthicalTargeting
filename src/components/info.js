function Info({ user, setInfo }) {
  const setInfoButton = (event) => {
    event.preventDefault();
    setInfo(false);
  };

  return (
    <div className="userInfoPanel">
      <div className="userInfoItem">{user.name}</div>
      {user.interests.map((interest) => (
        <div className="userInfoItem">{interest}</div>
      ))}
      <button onClick={(event) => setInfoButton(event)}>x</button>
    </div>
  );
}

export default Info;
