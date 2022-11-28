import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";

const CreatePost = () => {
  const route = useRoute();
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [caption, setCaption] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Post For {route.params.name}</Text>
      <View style={styles.postView}>
        <View style={styles.topView}>
          <View style={styles.topLeft}>
            <Image
              style={styles.userImage}
              source={require("../images/user.png")}
            />
            <View style={styles.nameView}>
              <Text style={styles.name}>{name == "" ? "Name" : name}</Text>
              <Text style={styles.userName}>
                {userName == "" ? "@Username" : "@" + userName}
              </Text>
            </View>
          </View>
          <Image style={styles.iconImage} source={route.params.icon} />
        </View>
        <Text style={styles.caption}>
          {caption == "" ? "Caption" : caption}
        </Text>
      </View>

      <TextInput
        placeholder="Name"
        style={styles.textInput}
        onChangeText={(txt) => {
          setName(txt);
        }}
        value={name}
      />
      <TextInput
        placeholder="Username"
        style={styles.textInput}
        onChangeText={(txt) => {
          setUsername(txt);
        }}
        value={userName}
      />
      <TextInput
        placeholder="Caption"
        style={styles.textInput}
        multiline={true}
        onChangeText={(txt) => {
          setCaption(txt);
        }}
        value={caption}
      />
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
    // height: 100,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  topView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  topLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  nameView: {
    marginLeft: 10,
  },
  name: {
    fontWeight: "600",
    fontSize: 18,
  },
  userName: {
    color: "#8e8e8e",
  },
  caption: {
    fontWeight: "600",
    fontSize: 16,
    margin: 15,
  },
  textInput: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: "center",
    marginTop: 20,
  },
});
