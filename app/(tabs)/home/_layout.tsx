import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import HomeHeader from "../../../src/components/home/header";

type Props = {};

const HomeLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: (props) => <HomeHeader />,
        }}
      />
    </Stack>
  );
};

export default HomeLayout;

const styles = StyleSheet.create({});
