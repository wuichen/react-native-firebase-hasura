import React, { useEffect } from "react";
import { View } from "react-native";
import CenterSpinner from "./components/Util/CenterSpinner";
import { useAuth } from "../lib/useAuth";
const AuthLoadingScreen = ({ navigation }) => {
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      navigation.navigate("Main");
    } else {
      if (typeof user === "boolean") {
        navigation.navigate("Auth");
      }
    }
  }, [user]);
  return (
    <View>
      <CenterSpinner />
    </View>
  );
};

export default AuthLoadingScreen;
