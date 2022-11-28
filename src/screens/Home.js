import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Home page.</Text>
      <Text
        style={[
          styles.welcome,
          { marginRight: 20, fontSize: 20, color: "#8e8e8e" },
        ]}
      >
        For which platform you want to create post?
      </Text>
      <View style={styles.socialView}>
        <FlatList
          data={[
            { name: "facebook", icon: require("../images/facebook.png") },
            { name: "twitter", icon: require("../images/twitter.png") },
            { name: "pinterest", icon: require("../images/pinterest.png") },
            { name: "user", icon: require("../images/user.png") },
            { name: "whatsapp", icon: require("../images/whatsapp.png") },
          ]}
          numColumns={3}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() => {
                  navigation.navigate("CreatePost", {
                    name: item.name,
                    icon: item.icon,
                  });
                }}
              >
                <Image source={item.icon} style={styles.itemimage} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#305",
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "600",
    color: "white",
    margineTop: 50,
    margineLeft: 20,
  },
  socialView: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {
    width: "20%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  itemimage: {
    width: 50,
    height: 50,
  },
});
