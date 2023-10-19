import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TopNavigation from "./TopNavigation";
import Menu from "./Menu";
import Introduction from "./Introduction";

type Props = {};

const HomeHeader = (props: Props) => {
  return (
    <View style={styles.container}>
      <TopNavigation />
      <Introduction />
      <Menu />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 18,
    borderBottomLeftRadius: 18,
    backgroundColor: "white",
    paddingBottom: 32,
  },
});
