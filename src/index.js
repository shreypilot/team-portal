import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);

// root.render(
//   <GoogleOAuthProvider clientId="386932037035-k8v833noqjk7m4***********.apps.googleusercontent.com">
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </GoogleOAuthProvider>
// );
