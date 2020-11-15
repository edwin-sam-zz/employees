import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';

import appSyncConfig from './appsync';

// A
const client = new AWSAppSyncClient({
  url: appSyncConfig.AppSync.Default.ApiUrl,
  region: appSyncConfig.AppSync.Default.Region,
  auth: {
    type: appSyncConfig.AppSync.Default.AuthMode,
    apiKey: appSyncConfig.AppSync.Default.apiKey,
  }
});

// B
const WithProvider = () => {
        
    return (
        <ApolloProvider client={client}>
        <Rehydrated 
            render={({ rehydrated }) => (
                rehydrated ? <App /> : <strong>Your custom UI componen here...</strong>
            )}
        />
        </ApolloProvider>
    )
}

ReactDOM.render(<WithProvider />, document.getElementById('root'));