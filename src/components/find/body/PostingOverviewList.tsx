import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import PostingOverviewItem from "./PostingOverviewItem";
import { postingOverviews } from "src/dummy/posting";

type Props = {};

const PostingOverviewList = (props: Props) => {
  return (
    <FlatList
      data={postingOverviews}
      renderItem={({ item, index }) => (
        <PostingOverviewItem postingOverview={item} />
      )}
      keyExtractor={(item, index) => `${index}`}
    />
  );
};

export default PostingOverviewList;

const styles = StyleSheet.create({});
