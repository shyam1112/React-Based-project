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
import Heading from './Heading';
import Array from './Array';
import Usememo from './Usememo';

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
      <Heading />
      <Navbarr />
      {/* <h1 style={{color:'red',backgroundColor:'gold'}}>Hello raju..! Style 1</h1><br/>
      <h1 className='usestyle'>Hello raju..! Style 2</h1><br/>
      <h1 className={style.success}>Hello raju..! Style 3</h1> */}

      {/* <Array /> */}
      <Usememo />
    </div>
  );
}

export default App;
 