import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { M_PostingOverview } from "@src/classes/posting";
import { Image } from "expo-image";
import moment from "moment";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { Divider } from "@rneui/themed";

type Props = {
  postingOverview: M_PostingOverview;
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
          <View style={styles.ratingContainer}>
            <MaterialIcon name="star" size={18} style={styles.star} />
            <Text style={styles.rating}>{postingOverview.averageRating}</Text>
          </View>
          <Divider orientation="vertical" />
          <Text style={styles.timePeriod}>
            {moment(postingOverview.startTime).format("YYYY.MM.DD")}
          </Text>
          <Divider orientation="vertical" />
          <View style={styles.timeContainer}>
            <Text style={styles.timePeriod}>
              {`${moment(postingOverview.startTime).format("hh:mm")}~${moment(
                postingOverview.endTime
              ).format("hh:mm")}`}
            </Text>
          </View>
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

    marginHorizontal: 8,
    marginVertical: 4,
  },
  metaContainer: {
    width: 256,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 8,
  },
  purposeContainer: {},
  purpose: {
    fontSize: 16,
    fontWeight: "500",
  },
  nicknameContainer: {},
  nickname: {
    fontSize: 16,
    fontWeight: "500",
  },
  subtitleContainer: {
    width: 224,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 2,
  },
  ratingContainer: {
    display: "flex",
    flexDirection: "row",
  },
  star: {
    color: "#eeee00",
  },
  rating: {
    paddingRight: 4,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "row",
  },
  timePeriod: {
    paddingHorizontal: 4,
    fontSize: 12,
  },
  descriptionContainer: {},
  description: {
    fontSize: 11,
    color: "grey",
  },
  thumbnailContainer: {},
  thumbnail: {
    flex: 1,
    width: 96,
    height: 96,
    borderRadius: 5,
  },
});
