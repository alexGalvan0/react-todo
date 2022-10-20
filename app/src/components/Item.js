function Item({ text, data, setData, iterable}) {
  const completeTask = () => {
   data[iterable].status = 'complete'
   setData([...data])
   console.log(data)
  };
  const deleteTask = () =>{
    data[iterable].status = 'deleted'
   setData([...data])
   console.log(data)
  }
  return (
    <div className="container-fluid mb-1">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <button className="btn btn-success" onClick={completeTask}>
            Complete
          </button>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{text}</li>
          </ul>
          <button onClick={deleteTask} className="btn btn-danger ml-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
