import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import './style.css'
import User from './User';
import UserClass from './UserClass';
import { useState } from 'react';
import Student from './Student';
import GetInput from './GetInput';
import Form from './Form';
import FormValidation from './FormValidation';
import Mount from './Mount';
import UseEffect from './UseEffect';
import style from './custom.module.css'
import Navbarr from './Navbarr';
import Array from './Array';
import Usememo from './Usememo';
import Useref from './Useref';
import ControllCom from './ControllCom';
import HOCcom from './HOCcom';
import {BrowserRouter,Routes,Route, Navigate, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import UsesearchHook from './UsesearchHook';
import Uselocation from './Uselocation';
import Login from './Login';
import Protect from './Protect';
import DynamicRouting from './DynamicRouting';
function App() {

  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
      {/* <button onClick={updatedata}>Click me </button> */}
      {/* <UserClass /> */}
      {/* <Student name={data} email="raju@gmail.com" other={{num:"9583266562" ,address:"akdjnkajdfv"}}/> */}
      {/* <GetInput /> */}
      {/* <Form /> */}
      {/* <br/><br/>
      <FormValidation />
      <Mount /> */}
      {/* <UseEffect />*/}
    
      {/* <h1 style={{color:'red',backgroundColor:'gold'}}>Hello raju..! Style 1</h1><br/>
      <h1 className='usestyle'>Hello raju..! Style 2</h1><br/>
      <h1 className={style.success}>Hello raju..! Style 3</h1> */}
      {/* 
      <Array />
      <Usememo /> */}
      {/* <Useref /> */}
      {/* <ControllCom /> */}
      {/* <UncontrollComp /> */}
      {/* <HOCcom /> */}


      {/******************Browser Router *************** */}
      <BrowserRouter>
      <Navbarr />
        <Routes>
          <Route path='/' element={<Protect Component={Home}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/about" element={<Protect Component={About}/>} />
          <Route path="/User/:id" element={<Protect Component={User}/>} />
          <Route path="/usesearch" element={<UsesearchHook />} />
          {/* <Route path="/*" element={<h1>404 Not Found..</h1>} /> */}
          <Route path='/*' element={<Navigate to='/'/>} />
          <Route path='/uselocation' element={<Uselocation/>}/>
          <Route path='/dynamic' element={<DynamicRouting/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
