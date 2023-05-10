function Header({ createdDate, undoneTodo }) {
  return (
    <>
      <h1>TODO LIST</h1>
      <div>
        <p>{createdDate}</p>
        <p>{undoneTodo}개의 할 일이 남았습니다.</p>
      </div>
    </>
  );
}

export default Header;
