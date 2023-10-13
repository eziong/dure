import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const Introduction = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Jempa님,</Text>
      <Text style={styles.text}>새로운 친구를 만나봐요!</Text>
    </View>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  text: {
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 12,
  },
});
