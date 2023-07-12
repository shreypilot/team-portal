import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(

//     <BrowserRouter>
//       <App />
//     </BrowserRouter>

// );

root.render(
  <GoogleOAuthProvider clientId="123725713610-saf0n8o3oa4nmejsppul6fktr9ohr2vo.apps.googleusercontent.com">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GoogleOAuthProvider>
);
