import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Badge from "@src/components/common/Badge";
import ChatButton from "@src/components/common/ChatButton";
import NotificationButton from "@src/components/common/NotificationButton";

type Props = {};

const TopNavigation = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.blank} />
      <View style={styles.iconContainers}>
        <ChatButton />
        <NotificationButton />
      </View>
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  blank: {
    height: 28,
  },
  iconContainers: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 8,
    paddingTop: 16,
  },
});
