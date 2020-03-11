## Introduction

This is a expo react-native todo app backed by Hasura graphql engine using firebase auth. repo based on these

1. https://hasura.io/blog/authentication-and-authorization-using-hasura-and-firebase/
2. https://hasura.io/learn/graphql/react-native/introduction/

## Getting Started

1. deploy a hasura graphql console `https://hasura.io/docs/1.0/graphql/manual/getting-started/heroku-simple.html`
2. setup firebase account and enable authentication, firebase realtime db, functions, and storage(need to setup billing to pay as you go).
3. in realtime db, set the rules to this `{ "rules": { "metadata": { "$uid": { ".read": "auth != null && auth.uid == $uid" } } } }`
4. change projects.default in .firebaserc to your own firebase project id
5. Install hasura cli
6. `cd hasura` and run `hasura migrate apply --endpoint http://your-hasura-instance.herokuapp.com`
7. rename `config.example.js` to `config.js` and import your own firebase settings
8. setup hasura environment values. If hasura consoles hosted on heroku, open app in heroku settings page and change these config vars.
   `HASURA_GRAPHQL_ADMIN_SECRET=secret`
   `HASURA_GRAPHQL_JWT_SECRET={ "type":"RS256", "jwk_url": "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com", "audience": "react-native-firebase-hasura", "issuer": "https://securetoken.google.com/react-native-firebase-hasura" }`
   `HASURA_GRAPHQL_UNAUTHORIZED_ROLE=anonymous`
9. change the graphql link in `src/apollo`

## repo concepts

1. serverless functions being served from firebase cloud functions
2. hasura graphql engine
3. when users signup, cloud functions get trigger and create new user with hasura custom claims. the custom claims are used to verify hasura db usage.
