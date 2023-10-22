import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@rneui/themed";
import BottomSheetButton from "@src/components/common/BottomSheetButton";
import { ButtonSheetButton } from "@src/classes/button";

type Props = {};

const FriendsFilter = (props: Props) => {
  const sortType: ButtonSheetButton[] = [
    new ButtonSheetButton({
      key: "recent",
      title: "최근 만난순",
      onPress: () => {},
    }),
    new ButtonSheetButton({
      key: "connection",
      title: "커넥션",
      onPress: () => {},
    }),
    new ButtonSheetButton({
      key: "closeArea",
      title: "거리",
      onPress: () => {},
    }),
  ];

  return (
    <View style={styles.container}>
      <BottomSheetButton
        title={"title0"}
        buttons={sortType}
        buttonContainer={styles.buttonContainer}
      />
    </View>
  );
};

export default FriendsFilter;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 4,
    marginHorizontal: 8,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
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
    width: 96,
    height: 28,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
  },
});
