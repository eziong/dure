import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FriendList from "./FriendList";
import FindFilter from "./FriendsFilter";

type Props = {};

const NearBody = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* //TODO - nav bar with group type (friend, helper, ...) */}
      <FindFilter />
      <FriendList />
    </View>
  );
};

export default NearBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
