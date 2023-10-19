import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import NearHeader from "../../../src/components/find/header";

type Props = {};

const FindLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: (props) => <NearHeader />,
        }}
      />
    </Stack>
  );
};

export default FindLayout;

const styles = StyleSheet.create({});
