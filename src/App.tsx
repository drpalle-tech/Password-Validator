import React, {useState} from 'react';
import validator from 'validator';
import './App.css';

const App = () => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState<string>('');

  const validateInput = (value: string) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1
    })) {
      setMessage('Strong password');
      setColor('green');
    } else {
      setMessage('Password is not strong enough');
      setColor('red');
    }
  };
  
  return (
    <div className="App">
      <span>Enter your password: </span>
      <input onChange = {(e) => validateInput(e.target.value)}></input>
      <p className={color}>{message}</p>
    </div>
  );
}

export default App;
