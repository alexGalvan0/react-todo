import { useState, useEffect } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {
  let localStorageData = JSON.parse(localStorage.getItem("data"));
  if (localStorageData === null) {
    localStorageData = [];
  }

  const [data, setData] = useState(localStorageData);
  const [page, setPage] = useState("home");

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data")));
  }, []);

  //Structure
  const taskTemplete = {
    id: "",
    text: "",
    status: "",
    created: "",
    update: "",
  };

  //State

  if (data !== []) {
    localStorage.setItem("data", JSON.stringify(data));
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col">
          <Input title='TODO' taskTemplete={taskTemplete} setData={setData} data={data} />
          <List data={data} setData={setData} page={page} setPage={setPage} />
          <Footer setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  );
}

export default App;
