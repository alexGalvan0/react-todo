import Item from "./Item";

function List() {
  return (
 <div className="container">
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