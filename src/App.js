import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
<<<<<<< HEAD
import Create from './components/Create/Create.js';
import Test from "./components/Test"
=======
import MainPage from './components/MainPage';
import Test from "./components/Test";
import Calendar from "./components/Calander/Calander";
>>>>>>> 0c293958e6a3f61ad0c1fefc7f1ac9a79fa8c466

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

Amplify.configure(awsconfig)

function App() {
  return (
    <Router>
   
    <Routes>
      
<<<<<<< HEAD
      
      <Route path="/" exact element={<Create/>}/>
=======
      <Route path="/" exact element={<MainPage/>}/>
      <Route path="/Calendar" exact element={<Calendar/>}/>
>>>>>>> 0c293958e6a3f61ad0c1fefc7f1ac9a79fa8c466
      <Route path="/Test" exact element={<Test/>}/>
      
      
    </Routes>
 </Router>
  );
}

export default withAuthenticator(App);