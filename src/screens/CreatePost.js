import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const CreatePost = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post For {route.params.name}</Text>
      <View style={styles.postView}></View>
    </View>
  );
};
export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",  
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    alignSelf: "center",
    marginTop: 100,
  },
  postView: {
    width: "80%",
    borderRadius: 10,
    elevation: 10,
    alignSelf: "center",
    height: 100,
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
