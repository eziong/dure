import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Friend } from "@src/classes/friend";
import { Divider } from "@rneui/themed";

type Props = {
  friend: Friend;
};

const FriendItem = ({ friend }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: friend.getThumbnail() }}
          placeholder={""}
          style={styles.thumbnail}
          contentFit="cover"
          transition={1000}
        />
      </View>
      <View style={styles.metaContainer}>
        <View style={styles.nicknameContainer}>
          <Text style={styles.nickname}>{friend.nickname}</Text>
        </View>
        <View style={styles.connectionsContainer}>
          <Text>총 커넥션</Text>
          <Text style={styles.connection}>{friend.connections.length}</Text>
        </View>
        <View style={styles.historyContainer}>
          <Text>최근 만남</Text>
          <Text style={styles.history}>한강에서 치맥</Text>
        </View>
      </View>
    </View>
  );
};

export default FriendItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "white",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    marginHorizontal: 8,
    marginVertical: 4,
  },
  thumbnailContainer: {},
  thumbnail: {
    flex: 1,
    width: 96,
    height: 96,
    borderRadius: 5,
  },
  metaContainer: {
    marginLeft: 24,
    height: 72,
  },
  nicknameContainer: {
    marginBottom: 8,
  },
  nickname: {
    fontSize: 16,
    fontWeight: "500",
  },
  connectionsContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
  },
  connection: {
    marginLeft: 8,
    color: "grey",
  },
  historyContainer: {
    display: "flex",
    flexDirection: "row",
  },
  history: {
    marginLeft: 8,
    color: "grey",
  },
});
