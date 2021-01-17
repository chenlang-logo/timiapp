// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 
// import {BrowserRouter} from "react-router-dom";
import React from "react"
import { Route} from 'react-router-dom'
import login from "./pages/login"
import Main from './Main'

function App() {
  return (
   <div>
          <Route path="/"  exact={true} component={login} ></Route>
      
          <Route path="/Main"  component={Main} ></Route>

       {/* <Main/> */}
   </div>
  
  );
}

export default App;
