import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PostingOverview } from "@classes/posting";
import { Image } from "expo-image";
import moment from "moment";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

type Props = {
  postingOverview: PostingOverview;
};

const PostingOverviewItem = ({ postingOverview }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.metaContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.purposeContainer}>
            <Text style={styles.purpose}>[{postingOverview.purpose}]</Text>
          </View>
          <View style={styles.nicknameContainer}>
            <Text style={styles.nickname}>{postingOverview.nickname}</Text>
          </View>
        </View>
        <View style={styles.subtitleContainer}>
          <MaterialIcon name="star" size={18} style={styles.star} />
          <Text style={styles.rating}>{postingOverview.averageRating}</Text>
          <Text style={styles.timePeriod}>
            {moment(postingOverview.startTime).format("MM DD || hh")}
          </Text>
          <Text style={styles.timePeriod}>
            {moment(postingOverview.endTime).format("MM DD || hh")}
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{postingOverview.description}</Text>
        </View>
      </View>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: postingOverview.thumbnail }}
          placeholder={""}
          style={styles.thumbnail}
          contentFit="cover"
          transition={1000}
        />
      </View>
    </View>
  );
};

export default PostingOverviewItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,

    margin: 8,
  },
  metaContainer: {},
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  purposeContainer: {},
  purpose: {
    fontSize: 18,
    fontWeight: "500",
  },
  nicknameContainer: {},
  nickname: {
    fontSize: 18,
    fontWeight: "500",
  },
  subtitleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    color: "#eeee00",
  },
  rating: {},
  timePeriod: {},
  descriptionContainer: {},
  description: {},
  thumbnailContainer: {},
  thumbnail: {
    flex: 1,
    width: 128,
    height: 128,
    borderRadius: 5,
  },
});
