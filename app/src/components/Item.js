function Item({title}) {

  


  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col d-flex justify-content-between">
          <button className="btn btn-success">Complete</button>
          <ul className="list-group">
            <li className="list-group-item">{title}</li>
          </ul>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Item;
