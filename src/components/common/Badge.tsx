import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  badgeStyle?: StyleProp<TextStyle>;
  value: number;
};

const Badge = ({ containerStyle, badgeStyle, value }: Props) => {
  const getValue = () => {
    if (value < 10) return ` ${value} `;
    if (value < 100) return `${value}`;
    return "99";
  };

  if (value < 1) return null;

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.badge, badgeStyle]}>{getValue()}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 15,
    paddingVertical: 1,
    paddingHorizontal: 2,
  },
  badge: {
    color: "white",
    fontSize: 11,
    fontWeight: "500",
  },
});
