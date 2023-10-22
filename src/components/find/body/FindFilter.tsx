import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import BottomSheetButton from "@src/components/common/BottomSheetButton";
import { ButtonSheetButton } from "@src/classes/button";

type Props = {};

const FindFilter = (props: Props) => {
  const sortType: ButtonSheetButton[] = [
    new ButtonSheetButton({
      key: "recent",
      title: "최근 등록",
      onPress: () => {},
    }),
    { key: "closeArea", title: "거리", onPress: () => {} },
    { key: "closeTime", title: "시간", onPress: () => {} },
    { key: "ranking", title: "랭킹", onPress: () => {} },
  ];
  const sexType: ButtonSheetButton[] = [
    { key: "all", title: "성별", onPress: () => {} },
    { key: "male", title: "남자", onPress: () => {} },
    { key: "female", title: "여자", onPress: () => {} },
  ];
  const friendType: ButtonSheetButton[] = [
    { key: "all", title: "모든 친구", onPress: () => {} },
    { key: "movie", title: "영화 친구", onPress: () => {} },
    { key: "dine", title: "식사 친구", onPress: () => {} },
    { key: "drink", title: "술 친구", onPress: () => {} },
    { key: "trip", title: "여행 친구", onPress: () => {} },
    { key: "game", title: "게임 친구", onPress: () => {} },
    { key: "exercise", title: "운동 친구", onPress: () => {} },
    { key: "study", title: "공부 친구", onPress: () => {} },
  ];
  const viewType: ButtonSheetButton[] = [
    { key: "list", title: "리스트", onPress: () => {} },
    { key: "map", title: "맵", onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <BottomSheetButton
        title={"title0"}
        buttons={sortType}
        buttonContainer={styles.buttonContainer}
      />
      <BottomSheetButton
        title={"title1"}
        buttons={sexType}
        buttonContainer={styles.buttonContainer}
      />
      <BottomSheetButton
        title={"title2"}
        buttons={friendType}
        buttonContainer={styles.buttonContainer}
      />
      <BottomSheetButton
        title={"title3"}
        buttons={viewType}
        buttonContainer={styles.buttonContainer}
      />
    </View>
  );
};

export default FindFilter;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
    marginBottom: 4,
    marginHorizontal: 8,
    backgroundColor: "white",
    paddingVertical: 8,
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 72,
    height: 28,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});
