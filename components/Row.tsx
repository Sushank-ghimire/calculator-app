import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode;
}

export default function Row({ children }: Props) {
  return <View style={styles.row}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
