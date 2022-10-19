import { useState } from 'react'
import dayjs from "dayjs";


function Input({taskTemplete, setData,data}) {

const [ userInput, setUserInput ] = useState('')
// text: "", 
// status: "",
// created: "",
// updated: "",
// id: "",

const addTask = () =>{
    const newTask = {
        ...taskTemplete,
        id:data.length +1,
        text : userInput,
        status:'incomplete',
        created:`${dayjs().date()}`,
        update: ''
        
    }
    console.log(newTask)
}

  return (
    <div className="container pb-5" style={{width:'15rem'}}>
      <div className="row">
      <h1 className='text-center'>TO DO!</h1>
        <div className="col d-flex justify-content-center flex-row gap-2" >
        <input onChange={e => setUserInput(e.target.value)} type="text" />
          <button onClick={addTask} className="btn btn-primary">Add</button>
        </div>
      </div>
    </div>
  );
}
export default Input;
