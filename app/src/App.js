import { useState } from "react";

import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {


    //Structure

  const taskTemplete = {
    id: "",
    text: "", 
    status: "",
    created: "",
    update:""
  };

  //When add buton is pressed, create a new array with task information.


  //State
  const [data, setData] = useState([]);
  if(data !== []){
    localStorage.setItem('data',JSON.stringify(data))
  }
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col">
          <Input taskTemplete={taskTemplete} setData={setData} data={data} />
          <List />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
