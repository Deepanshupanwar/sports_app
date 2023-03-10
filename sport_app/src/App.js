import React, { useState } from "react";
import './App.css';
import { CollectHead } from './components/header/collectHead';
import { Login } from './components/header/loginPage';
function App() {
  const [currentForm, setCurrentForm] = useState("collectHead");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div classname='App'>
      {
        currentForm === "collectHead" ? <CollectHead onFormSwitch={toggleForm} /> : <Login onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
