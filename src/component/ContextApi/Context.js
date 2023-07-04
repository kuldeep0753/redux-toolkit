import { React, useState, createContext } from "react";
import Component1 from "./Component1";
import UserContext from "./MyContext";

const Context = () => {
  const [value, setValue] = useState("Kuldeep");

  function handleData(){
    setValue("Deepak");
  }

  return (
    <UserContext.Provider value={value}>
      <h1>Componnet value: {value}</h1>
      <button onClick={handleData}>CLick Me!!</button>
      <Component1 />
    </UserContext.Provider>
  );
};

export default Context;
