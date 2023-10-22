import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatButton from "@src/components/common/ChatButton";
import NotificationButton from "@src/components/common/NotificationButton";

type Props = {};

const FindHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>친구 목록</Text>
      <View style={styles.iconContainers}>
        <ChatButton />
        <NotificationButton />
      </View>
    </View>
  );
};

export default FindHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 24,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
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
