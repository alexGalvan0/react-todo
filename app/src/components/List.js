import Item from "./Item";

function List() {
  return (
 <div className="container-fluid" style={{width:'50vw'}}>
  <div className="row">
    <div className="col">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  </div>
 </div>
  );
}

export default List