import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Badge from "./Badge";
import { router } from "expo-router";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

type Props = {};

const NotificationButton = (props: Props) => {
  const onPressGoNotification = () => {
    router.push("notifications");
  };

  return (
    <Pressable onPress={onPressGoNotification} style={styles.container}>
      <MaterialIcon name="notifications-none" size={24} />
      <Badge
        containerStyle={styles.badgeContainer}
        badgeStyle={styles.badge}
        value={100}
      />
    </Pressable>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 4,
    marginLeft: 4,
  },
  badgeContainer: {},
  badge: {},
});
