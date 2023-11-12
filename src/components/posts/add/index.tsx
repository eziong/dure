import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Button, ButtonGroup } from "@rneui/themed";
import { M_BottomSheetButton } from "@src/classes/button";
import BottomSheetButton from "@src/components/common/BottomSheetButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import TimePicker from "@src/components/common/TimePicker";
import FromToTimePickers from "@src/components/friends/body/FromToTimePickers";

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
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>친구 기다리기</Text>
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>주 제</Text>
          <BottomSheetButton
            placeholder={"title0"}
            buttons={[]}
            // buttonContainer={{}}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>시 간</Text>
          <FromToTimePickers />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>성 별</Text>
          <ButtonGroup
            buttons={["모두", "남자", "여자"]}
            selectedIndex={0}
            onPress={(value) => {}}
            containerStyle={{ width: 144 }}
          />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>Intro</Text>
          <TextInput style={styles.textInput} multiline />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>위 치</Text>
          <TextInput style={styles.textInput} multiline />
        </View>
        <View style={styles.subContainer}>
          <Text style={styles.subTitle}>페 이</Text>
          <ButtonGroup
            buttons={["더치페이", "내가 사줄게", "너가 사줘"]}
            selectedIndex={0}
            onPress={(value) => {}}
            containerStyle={{}}
          />
        </View>
        <View style={{ flex: 1 }} />
        <Button title={"등록"} onPress={() => {}} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AddPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 72,
    backgroundColor: "white",
  },
  titleContainer: {
    height: 64,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
  },
  subContainer: {
    display: "flex",
    // flexDirection: "row",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  textInput: {
    borderWidth: 4,
    borderRadius: 5,
    borderColor: "grey",
  },
});
