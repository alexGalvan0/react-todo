import Item from "./Item";

function List({data}) {
  let localData = JSON.parse(localStorage.getItem("data"));
  console.log(localData);

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          {localData.map((d, i) => (
            <Item data={data} text={d.text} key={i}  />
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
