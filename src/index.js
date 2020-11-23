import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { gql } from '@apollo/client';

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
    apiKey: appSyncConfig.AppSync.Default.ApiKey,
  }
});

// B
const WithProvider = () => {  

  return (
    <ApolloProvider client={client}>
        <Rehydrated 
            render={({ rehydrated }) => (
                rehydrated ? <App /> : <strong>Your custom UI component here...</strong>
            )}
        />
    </ApolloProvider>
  )
}

// Test query 

//client.mutate({
//   variables: { firstname: "Edwin", lastname: "Sam" },
//   mutation: gql`
//     mutation createEmployee($firstname: String!, $lastname: String!){
//       createEmployee( input: {firstname: $firstname, lastname: $lastname} ) {
//         id
//         firstname
//         lastname
//       }
//     }
//   `

client.query({
  query: gql`
    query listEmployees {
      listEmployees {
          items {
              id
              firstname
              lastname
              skills
          }
      }
  }
  `  
})  
  .then(result => console.log(result))
  .catch(error => console.log(error));


ReactDOM.render(<WithProvider />, document.getElementById('root'));