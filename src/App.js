import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import MainPage from './components/MainPage';
import Test from "./components/Test"

import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

Amplify.configure(awsconfig)

function App() {
  return (
    <Router>
   
    <Routes>
      
      
      <Route path="/" exact element={<MainPage/>}/>
      <Route path="/Test" exact element={<Test/>}/>
      
      
    </Routes>
 </Router>
  );
}

export default withAuthenticator(App);