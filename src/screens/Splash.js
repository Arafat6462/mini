import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  // run for 3 sec and re-direct to home
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Splash</Text>
      {/* <Button title="Back Home" onPress={navigation.navigate("Home") } /> */}
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a5",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    fontWeight: "800",
    color: "red",
  },
});
