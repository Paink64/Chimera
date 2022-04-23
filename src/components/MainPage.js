import React from 'react';

import awsconfig from '../aws-exports';
import Amplify from 'aws-amplify';
import Lobby from './Lobby/Lobby';

import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig)

function MainPage() {
  
  return (
    <div className="App">
      <header>
        <h1>We now have Auth!</h1>
      </header>
      <Lobby/>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(MainPage);