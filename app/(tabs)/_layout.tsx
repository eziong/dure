import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Tabs } from "expo-router";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

type Props = {};

const TabsLayout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              name="home-filled"
              size={28}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="near"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              name="my-location"
              size={28}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="add_post/index"
        options={{
          tabBarButton: (props) => (
            <View style={styles.centerButtonContainer}>
              <Link href={"/posts/add"} asChild>
                <Pressable>
                  <View style={styles.centerButton}>
                    <MaterialIcon name="add" color="white" size={28} />
                  </View>
                </Pressable>
              </Link>
            </View>
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              name="groups"
              size={28}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialIcon
              name="person"
              size={28}
              color={focused ? "black" : "grey"}
            />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  centerButtonContainer: {
    width: 72,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "green",
  },
});
