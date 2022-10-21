import './App.css'

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


  const completeAll = () => {
      setData(
        data.map((item) => {
          return { ...item, status:'complete' }
        })
      )
    }

    const deleteAll = () => {
      setData(
        data.map((item) => {
          return { ...item, status:'deleted' }
        })
      )
    }

    let taskCount = () =>{
      return 
    }

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
        <div className="col mb-5">
          <Input
            title="TODO"
            taskTemplete={taskTemplete}
            setData={setData}
            data={data}
          />
          {page == "home" ? (
            <>
              <button  onClick={completeAll} className="btn btn-dark btn-sm">Complete All</button>
              <button onClick={deleteAll} className="btn btn-danger btn-sm">Delete All</button>
            </>
          ) : (
            ""
          )}
          <List data={data} setData={setData} page={page} setPage={setPage} />
          <Footer setPage={setPage} page={page} />
        </div>
        <h4>To do {taskCount}</h4>
      </div>
    </div>
  );
}

export default App;
