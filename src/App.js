// import React from "react";
// import Counter, { Footer } from "./Counter.js";
// import { Header as Head } from "./Counter.js";

// // Parent = Class Based React Component
// class App extends React.Component {
//   render() {
//     // diff is a props variable here
//     return (
//       <div>
//         <Head />
//         <Counter diff={1} />
//         <Counter diff={10} />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;

//___________________________________

// Controlled Components FORM

// import React from "react";
// import Form from "./Form.js";

// // Parent = Class Based React Component
// class App extends React.Component {
//   render() {
//     // diff is a props variable here
//     return (
//       <div>
//         <Form />
//       </div>
//     );
//   }
// }

// export default App;

//__________________________________
import React from "react";
import UserDashboard from "./session1-takehome/UserDashboard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <UserDashboard />
    </div>
  );
}
