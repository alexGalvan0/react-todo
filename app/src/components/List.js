import Item from "./Item";

function List() {
  return (
 <div className="container " style={{width:'33vw'}}>
  <div className="row">
    <div className="col">
      <Item title='Clean Room'/>
      <Item title='Finish project'/>

    </div>
  </div>
 </div>
  );
}

export default List