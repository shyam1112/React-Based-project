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
import UncontrollComp from './UncontrollComp';
import HOCcom from './HOCcom';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import About from './About';
import Home from './Home';
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
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/User/:name" element={<User />} />
          {/* <Route path="/*" element={<h1>404 Not Found..</h1>} /> */}
          <Route path='/*' element={<Navigate to='/'/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
