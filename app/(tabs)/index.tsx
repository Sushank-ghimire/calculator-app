import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Button from "@/components/Button";
import Row from "@/components/Row";
import { calculator, initialState } from "@/utils/calculator";

export default function Index() {
  const [state, setState] = useState<any>(initialState);

  const handleTap = (type: string, value?: any) => {
    setState((prevState) => calculator(type, value, prevState));
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.display}>{state.currentValue}</Text>

        {/* Calculator Buttons */}
        <View style={styles.buttonGrid}>
          <View style={styles.row}>
            <Button
              text="C"
              onPress={() => handleTap("clear")}
              style={styles.clearButton}
            />
            <Button
              text="+/-"
              onPress={() => handleTap("posneg")}
              style={styles.operatorButton}
            />
            <Button
              text="%"
              onPress={() => handleTap("percentage")}
              style={styles.operatorButton}
            />
            <Button
              text="/"
              onPress={() => handleTap("operator", "/")}
              style={styles.operatorButton}
            />
          </View>

          <View style={styles.row}>
            <Button
              text="7"
              onPress={() => handleTap("number", 7)}
              style={styles.numberButton}
            />
            <Button
              text="8"
              onPress={() => handleTap("number", 8)}
              style={styles.numberButton}
            />
            <Button
              text="9"
              onPress={() => handleTap("number", 9)}
              style={styles.numberButton}
            />
            <Button
              text="X"
              onPress={() => handleTap("operator", "*")}
              style={styles.operatorButton}
            />
          </View>

          <View style={styles.row}>
            <Button
              text="4"
              onPress={() => handleTap("number", 4)}
              style={styles.numberButton}
            />
            <Button
              text="5"
              onPress={() => handleTap("number", 5)}
              style={styles.numberButton}
            />
            <Button
              text="6"
              onPress={() => handleTap("number", 6)}
              style={styles.numberButton}
            />
            <Button
              text="-"
              onPress={() => handleTap("operator", "-")}
              style={styles.operatorButton}
            />
          </View>

          <View style={styles.row}>
            <Button
              text="1"
              onPress={() => handleTap("number", 1)}
              style={styles.numberButton}
            />
            <Button
              text="2"
              onPress={() => handleTap("number", 2)}
              style={styles.numberButton}
            />
            <Button
              text="3"
              onPress={() => handleTap("number", 3)}
              style={styles.numberButton}
            />
            <Button
              text="+"
              onPress={() => handleTap("operator", "+")}
              style={styles.operatorButton}
            />
          </View>

          <View style={styles.row}>
            <Button
              text="0"
              onPress={() => handleTap("number", 0)}
              style={styles.numberButtonLarge}
            />
            <Button
              text="."
              onPress={() => handleTap("number", ".")}
              style={styles.numberButton}
            />
            <Button
              text="="
              onPress={() => handleTap("equal")}
              style={styles.equalButton}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background for better contrast
    padding: 20,
  },
  display: {
    fontSize: 48,
    color: "#333",
    marginBottom: 20,
    textAlign: "right",
    width: "100%",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2, // Gives a shadow effect on Android
  },
  buttonGrid: {
    flex: 1,
    width: "100%",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  numberButton: {
    backgroundColor: "#4CAF50", // Green background for numbers
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 80,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
  numberButtonLarge: {
    backgroundColor: "#4CAF50",
    flex: 2, // Make '0' button larger
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 80,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
  operatorButton: {
    backgroundColor: "#ff9800", // Orange background for operators
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 80,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
  equalButton: {
    backgroundColor: "#2196F3", // Blue background for equal button
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 80,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
  clearButton: {
    backgroundColor: "#f44336", // Red for clear button
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    height: 80,
    borderRadius: 10,
    fontSize: 24,
    color: "#fff",
  },
});
