import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { FlatList } from "react-native-gesture-handler";

type Props = {};

const Menu = (props: Props) => {
  const goToLocalFriend = () => {};

  const goToHelper = () => {};

  const menuItems = [
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>식사 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>술 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>여행 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>게임 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>운동 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>공부 친구</Text>
    </Pressable>,
    <Pressable onPress={goToLocalFriend} style={styles.iconContainer}>
      <MaterialIcon name="10k" size={48} />
      <Text>기타</Text>
    </Pressable>,
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => item}
        keyExtractor={(item, index) => `${index}`}
        numColumns={4}
      />
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  iconContainer: {
    width: 72,
    height: 72,
    margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
