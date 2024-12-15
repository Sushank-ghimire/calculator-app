import { Link, Stack } from "expo-router";
import { View, StyleSheet } from "react-native";
import React from "react";

const NotFoundPage = () => {
  return (
    <View style={styles.screen}>
      <Stack.Screen options={{ title: "Oops!" }} />
      <Link href={"/"}>Go to Home Screen</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 35,
    fontWeight: "bold",
  },
});

export default NotFoundPage;
