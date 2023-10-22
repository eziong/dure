import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import Badge from "./Badge";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

type Props = {};

const ChatButton = (props: Props) => {
  const onPressGoChatting = () => {
    router.push("chattings");
  };

  return (
    <Pressable onPress={onPressGoChatting} style={styles.container}>
      <MaterialIcon name="chat-bubble-outline" size={24} />
      <Badge
        containerStyle={styles.badgeContainer}
        badgeStyle={styles.badge}
        value={1}
      />
    </Pressable>
  );
};

export default ChatButton;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 4,
    marginLeft: 4,
  },
  badgeContainer: {},
  badge: {},
});
