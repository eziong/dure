import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

type Props = {};

const FriendsLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default FriendsLayout;

const styles = StyleSheet.create({});
