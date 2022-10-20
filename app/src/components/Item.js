function Item({text,data}) {

  const completeTask = () => {
    data.forEach((d) => {
    
    })
  }

  const deleteTask = () => {

  }



  return (
    <div className="container-fluid mb-1">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <button className="btn btn-success" onClick={completeTask}>Complete</button>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>{text}</li>
          </ul>
          <button className="btn btn-danger ml-2">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
