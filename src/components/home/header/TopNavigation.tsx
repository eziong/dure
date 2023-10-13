import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import Badge from "@components/common/Badge";

type Props = {};

const TopNavigation = (props: Props) => {
  const onPressGoChatting = () => {
    router.push("chattings");
  };
  const onPressGoNotification = () => {
    router.push("notifications");
  };

  return (
    <View style={styles.container}>
      <View />
      <View style={styles.iconContainers}>
        <Pressable onPress={onPressGoChatting} style={styles.iconContainer}>
          <MaterialIcon name="chat-bubble-outline" size={24} />
          <Badge value={1} />
        </Pressable>
        <Pressable onPress={onPressGoNotification} style={styles.iconContainer}>
          <MaterialIcon name="notifications-none" size={24} />
          <Badge
            containerStyle={styles.badgeContainer}
            badgeStyle={styles.badge}
            value={100}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconContainers: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
    paddingTop: 16,
  },
  iconContainer: {
    position: "relative",
    padding: 4,
    marginLeft: 4,
  },
  badgeContainer: {},
  badge: {},
});
