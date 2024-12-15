import { Dimensions, StyleSheet, Text, View } from "react-native";
import ButtonComponent from "@/components/Button";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default function Index() {
  const calculatorKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "*", "+", "=", "-"];

  return (
    <View style={styles.home}>
      <Text style={styles.text}>This is the homepage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(6, 110, 255, 0.5)",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

const style = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: Math.floor(buttonWidth - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWidth),
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  textSecondary: {
    color: "#060606",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#ffc107",
  },
});
