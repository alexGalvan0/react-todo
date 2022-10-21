import Item from "./Item";

function List({ data, setData,page }) {
  let localData = JSON.parse(localStorage.getItem("data"));

  return (
    <div className="row">
      <div className="col">
        {page === "home"
          ? localData.map((d, i) =>
              d.status === "incomplete" ? (
                <Item
                  data={data}
                  setData={setData}
                  text={d.text}
                  key={i}
                  iterable={i}
                  
                />
              ) : (
                ""
              )
            )
          : page === "deleted"
          ? localData.map((d, i) =>
              d.status === "deleted" ? (
                <Item
                  data={data}
                  setData={setData}
                  text={d.text}
                  key={i}
                  iterable={i}
                  style={{ color: "red" }}
                />
              ) : (
                ""
              )
            )
          : page === "complete"
          ? localData.map((d, i) =>
              d.status === "complete" ? (
                <Item
                  data={data}
                  setData={setData}
                  text={d.text}
                  key={i}
                  iterable={i}
                  style={{ color: "green" }}
                />
              ) : (
                ""
              )
            )
          : ""}
      </div>
    </div>
  );
}

export default List;
