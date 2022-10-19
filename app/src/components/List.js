import Item from "./Item";

function List() {
  let localData = JSON.parse(localStorage.getItem("data"));
  console.log(localData);

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          {localData.map((d, i) => (
            <Item title={d.title} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
