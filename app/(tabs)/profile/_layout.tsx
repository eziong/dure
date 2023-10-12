import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ProfileHeader from "../../../src/components/profile/header";

type Props = {};

const ProfileLayout = (props: Props) => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          header: (props) => <ProfileHeader />,
        }}
      />
    </Stack>
  );
};

export default ProfileLayout;

const styles = StyleSheet.create({});
