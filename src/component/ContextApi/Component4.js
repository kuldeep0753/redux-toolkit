import { React, useContext } from "react";
import UserContext from "./MyContext";

const Component4 = () => {
  const user = useContext(UserContext);
  console.log(user);
  return <div>Component4 value: {user}</div>;
};

export default Component4;
