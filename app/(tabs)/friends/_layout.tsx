import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import FriendsHeader from "@src/components/friends/header";

type Props = {};

const FriendsLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: (props) => <FriendsHeader />,
        }}
      />
    </Stack>
  );
};

export default FriendsLayout;

const styles = StyleSheet.create({});
