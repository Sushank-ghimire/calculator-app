import React from "react";
import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native";

interface ButtonProps {
  text: string | number;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  onPress,
  text,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text === "*" ? "X" : text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
