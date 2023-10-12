import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import NearHeader from "../../../src/components/near/header";

type Props = {};

const NearLayout = (props: Props) => {
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

export default NearLayout;

const styles = StyleSheet.create({});
