import React from "react";
import Drawer from "./DrawerNavigator";
import CenterSpinner from "../screens/components/Util/CenterSpinner";
import { ApolloProvider } from "react-apollo";
import makeApolloClient from "../apollo";
import gql from "graphql-tag";
import { useAuth } from "../lib/useAuth";
console.disableYellowBox = true;

// GraphQL mutation to update last_seen
const EMIT_ONLINE_EVENT = gql`
  mutation {
    update_users(_set: { last_seen: "now()" }, where: {}) {
      affected_rows
    }
  }
`;

const Main = () => {
  const [client, setClient] = React.useState(null);
  const { user } = useAuth();
  const fetchSession = async () => {
    if (user) {
      // TODO: getting here from register page will result in error
      // due to new hasura custom claim key is still being set on
      // the cloud function, whereas the one here is still lacking it.
      const idToken = await user.getIdToken(true);
      console.log(idToken);
      const client = makeApolloClient(idToken);

      setClient(client);
      setInterval(() => {
        client.mutate({
          mutation: EMIT_ONLINE_EVENT
        });
      }, 30000);
    }
  };

  React.useEffect(() => {
    fetchSession();
  }, [user]);

  if (!client) {
    return <CenterSpinner />;
  }

  return (
    <ApolloProvider client={client}>
      <Drawer />
    </ApolloProvider>
  );
};

export default Main;
