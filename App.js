import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import CenterSpinner from "./src/screens/components/Util/CenterSpinner";
import { ProvideAuth } from "./src/lib/useAuth";

export default class App extends React.Component {
  state = {
    isLoadingComplete: true
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return <CenterSpinner />;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <ProvideAuth>
            <AppNavigator />
          </ProvideAuth>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
