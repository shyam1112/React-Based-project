import { click } from '@testing-library/user-event/dist/click';
import './App.css';
import User from './User';
import UserClass from './UserClass';
import { useState } from 'react';
import Student from './Student';
import GetInput from './GetInput';
import Form from './Form';
import FormValidation from './FormValidation';
import Mount from './Mount';

function App() {

  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
      {/* <button onClick={updatedata}>Click me </button> */}
      <UserClass />
      {/* <Student name={data} email="raju@gmail.com" other={{num:"9583266562" ,address:"akdjnkajdfv"}}/> */}
      <GetInput />
      {/* <Form /> */}
      <br/><br/>
      <FormValidation />
      <Mount />
    </div>
  );
}

export default App;
 