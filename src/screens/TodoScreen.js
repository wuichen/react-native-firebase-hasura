import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import Textbox from "./components/Todo/Textbox";
import Todos from "./components/Todo/Todos";

const TodoScreen = ({ isPublic, navigate }) => {
  return (
    <View style={styles.container}>
      <Textbox isPublic={isPublic} navigate={navigate} />
      <View style={styles.todoListContainer}>
        <Todos isPublic={isPublic} navigate={navigate} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    justifyContent: "flex-start"
  },
  todoListContainer: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
});

export default TodoScreen;
