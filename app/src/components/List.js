import Item from "./Item";

function List({ data, setData, iterable }) {
  let localData = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          {localData.map((d, i) => {
            if (d.status === "incomplete") {
              return (
                <Item
                  data={data}
                  setData={setData}
                  text={d.text}
                  key={i}
                  iterable={i}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default List;
