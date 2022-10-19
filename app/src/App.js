import { useState } from 'react'
import dayJs from 'dayjs'

import Input from './components/Input';
import List from './components/List';
import Footer from './components/Footer';


function App (){

//State
const task = {
    text:'',
    status:'',
    created:'',
    updated:'',
    id:'',
}


    return(
<div className="container d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
    <div className="row">
        <div className="col">
            <Input />
            <List />
            <Footer />
        </div>
    </div>
</div>
    )
}

export default App;