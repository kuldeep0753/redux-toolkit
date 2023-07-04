import React from "react";
import { useRouteError } from "react-router-dom";

// const Error = () => {
//   console.log("dfsdfj");
//   const err = useRouteError();
//   console.log(err);
//   return (
//     <div>
//       OOPS Something Went wrong
//       <h1>
//         {err.status}:{err.error.message}
//       </h1>
//     </div>
//   );
// };

// export default Error;

const Error=()=>{
    const err = useRouteError();
  console.log(err);
  return(<>
  <h2>error</h2>
  </>)
}

export default Error;
