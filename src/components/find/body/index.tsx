import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PostingOverviewList from "./PostingOverviewList";

type Props = {};

const NearBody = (props: Props) => {
  return (
    <View>
      <View>
        <Text>Nav bar</Text>
      </View>
      <View>
        <Text>filter</Text>
      </View>
      <View>
        <PostingOverviewList />
      </View>
    </View>
  );
};

export default NearBody;

const styles = StyleSheet.create({});
