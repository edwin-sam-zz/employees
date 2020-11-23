const appSyncConfig = {
    UserAgent: "aws-amplify-cli/0.1.0",
    Version: "1.0",
    IdentityManager: {
        Default: {}
    },
    AppSync: {
        Default: {
            ApiUrl: "https://qyqajpxndzdw5nojnzorgtw6we.appsync-api.us-west-2.amazonaws.com/graphql",
            Region: "us-west-2",
            AuthMode: "API_KEY",
            ApiKey: "da2-cxtvdwzcbfcjjlbc4usayavree",
            ClientDatabasePrefix: "Employees_API_KEY"
        }
    }
}

export default appSyncConfig;