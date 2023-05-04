function Header({ createdDate }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        <p>{createdDate}</p>
        <p>남은 할 일 개수</p>
      </div>
    </>
  );
}

export default Header;
