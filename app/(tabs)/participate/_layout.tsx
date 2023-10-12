import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ParticipateHeader from "../../../src/components/participate/header";

type Props = {};

const ParticipateLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: (props) => <ParticipateHeader />,
        }}
      />
    </Stack>
  );
};

export default ParticipateLayout;

const styles = StyleSheet.create({});
