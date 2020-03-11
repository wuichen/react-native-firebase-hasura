import React, { useEffect } from "react";
import { AsyncStorage, View } from "react-native";
import CenterSpinner from "./components/Util/CenterSpinner";
import { firebaseLogout as logout } from "../authActions";
import { useAuth } from "../lib/useAuth";
const LogoutScreen = ({ navigation }) => {
  const { user, signout } = useAuth();

  signout();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <CenterSpinner />
    </View>
  );
};

LogoutScreen.navigationOptions = {
  drawerLabel: "Logout",
  title: "Logging out"
};

export default LogoutScreen;
