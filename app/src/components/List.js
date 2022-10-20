import Item from "./Item";

function List({ data, setData, iterable }) {
  let localData = JSON.parse(localStorage.getItem("data"));

  return (

      <div className="row">
        <div className="col border p-2">
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
            } else if (d.status === "complete"){
              return (
                <Item
                  data={data}
                  setData={setData}
                  text={d.text}
                  key={i}
                  iterable={i}
                  style={{textDecoration:'line-through'}}
                />
              )
            }
          }
          
          )}
        </div>
      </div>
  );
}

export default List;
