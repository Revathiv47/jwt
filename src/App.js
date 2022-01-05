import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Routing
import PrivateRoute from "./components/routing/PrivateRoute.js";

// Screens
import PrivateScreen from "./components/screens/PrivateScreen";

import About from "./components/screens/About";
import LoginScreen from "./components/screens/LoginScreen";
import RegisterScreen from "./components/screens/RegisterScreen";
import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/screens/ResetPasswordScreen";

const App = () => {
  return (
    
      <div className="app">
      <BrowserRouter>
    <Routes>
    <Route path="/"element={<RegisterScreen />}></Route>
      <Route path="/login" element={<LoginScreen />}></Route>
      <Route path="/register" element={<RegisterScreen />}></Route>
      
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />}></Route>
      <Route path="/resetpassword" element={<ResetPasswordScreen />}></Route>
      
      

    </Routes>
  </BrowserRouter>
         </div>
    
  );
};

export default App;