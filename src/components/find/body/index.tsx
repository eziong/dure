import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostingOverviewList from "./PostingOverviewList";
import FindFilter from "./FindFilter";

type Props = {};

const NearBody = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* //TODO - nav bar with group type (friend, helper, ...) */}
      <FindFilter />
      <PostingOverviewList />
    </View>
  );
};

export default NearBody;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
