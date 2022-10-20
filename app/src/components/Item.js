function Item({ text, data, setData, iterable, style }) {
  const completeTask = () => {
    data[iterable].status = "complete";

    setData([...data]);
  };
  const deleteTask = () => {
    data[iterable].status = "deleted";
    setData([...data]);
  };
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col d-flex justify-content-between">
          <button className="btn btn-success" onClick={completeTask}>
            Complete
          </button>
          <ul className="list-group list-group-flush">
            <li style={style} className="list-group-item">
              {text}
            </li>
          </ul>
          <button onClick={deleteTask} className="btn btn-danger ml-2">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
