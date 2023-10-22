import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FriendItem from "./FriendItem";
import { friends } from "src/dummy/friends";

type Props = {};

const FriendList = (props: Props) => {
  return (
    <FlatList
      style={styles.container}
      data={friends}
      renderItem={({ item, index }) => (
        <FriendItem key={item.id} friend={item} />
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default FriendList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
