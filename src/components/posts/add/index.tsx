import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Button, ButtonGroup } from "@rneui/themed";
import { M_BottomSheetButton } from "@src/classes/button";
import BottomSheetButton from "@src/components/common/BottomSheetButton";

type Props = {};

const AddPost = (props: Props) => {
  const friendType: M_BottomSheetButton[] = [
    new M_BottomSheetButton({
      key: "movie",
      title: "영화 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "dine",
      title: "식사 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "drink",
      title: "술 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "trip",
      title: "여행 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "game",
      title: "게임 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "exercise",
      title: "운동 친구",
      onPress: () => {},
    }),
    new M_BottomSheetButton({
      key: "study",
      title: "공부 친구",
      onPress: () => {},
    }),
  ];

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>친구 기다리기</Text>
      </View>
      <View style={styles.purpose}>
        <Text>Purpose</Text>
        <BottomSheetButton title={"title0"} buttons={[]} buttonContainer={{}} />
      </View>
      <View style={styles.time}>
        <Text>Time</Text>
        <Text>Modal</Text>
      </View>
      <View style={styles.sex}>
        <Text>Sex</Text>
        <ButtonGroup
          buttons={["SIMPLE", "BUTTON", "GROUP"]}
          selectedIndex={0}
          onPress={(value) => {}}
          containerStyle={{}}
        />
      </View>
      <View style={styles.intro}>
        <Text>Intro</Text>
        <TextInput />
      </View>
      <View style={styles.position}>
        <Text>Position</Text>
        <TextInput />
      </View>
      <View style={styles.pay}>
        <Text>Pay</Text>
        <ButtonGroup
          buttons={["SIMPLE", "BUTTON", "GROUP"]}
          selectedIndex={0}
          onPress={(value) => {}}
          containerStyle={{}}
        />
      </View>
      <Button title={"등록"} onPress={() => {}} />
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
  },
  title: {},
  purpose: {},
  time: {},
  sex: {},
  intro: {},
  position: {},
  pay: {},
});
