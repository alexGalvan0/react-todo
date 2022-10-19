import { useState } from "react";
import dayJs from "dayjs";

import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

function App() {


    //Structure

  const taskTemplete = {
    text: "", 
    status: "",
    created: "",
    updated: "",
    id: "",
  };

  //When add buton is pressed, create a new array with task information.



  //State
  const [item, setItem] = useState([]);

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col">
          <Input taskTemplete={taskTemplete} />
          <List />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
