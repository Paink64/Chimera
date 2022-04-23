import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Create from './components/Create/Create.js';
import Lobby from "./components/Lobby/Lobby";
import Calendar from "./components/Calander/Calander";

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

Amplify.configure(awsconfig)

function App() {
  return (
    <Router>
   
    <Routes>
      
      
      <Route path="/" exact element={<Create/>}/>
      <Route path="/Calendar" exact element={<Calendar/>}/>
      <Route path="/Lobby" exact element={<Lobby/>}/>
      
      
    </Routes>
 </Router>
  );
}

export default withAuthenticator(App);