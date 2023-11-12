import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TimePicker from "@src/components/common/TimePicker";
import BottomSheetButton from "@src/components/common/BottomSheetButton";
import { M_BottomSheetButton } from "@src/classes/button";
import moment from "moment";

type Props = {};

const FromToTimePickers = (props: Props) => {
  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date>(new Date());
  const [isFromVisible, setIsFromVisible] = useState<boolean>(false);
  const [isToVisible, setIsToVisible] = useState<boolean>(false);

  const onChangeFrom = (date: Date) => {
    setFrom(date);
  };

  const onChangeTo = (date: Date) => {
    setTo(date);
  };

  return (
    <View style={styles.container}>
      <BottomSheetButton
        placeholder="미 정"
        buttons={[
          new M_BottomSheetButton({
            key: "empty",
            title: "미 정",
            onPress: () => {
              setIsFromVisible(false);
            },
          }),
          new M_BottomSheetButton({
            key: "empty",
            title: "날짜 선택",
            button: moment(from).format("YYYY/MM/DD hh:mm"),
            onPress: () => {
              setIsFromVisible(true);
            },
          }),
        ]}
      />
      <Text> ~ </Text>
      <BottomSheetButton
        placeholder="미 정"
        buttons={[
          new M_BottomSheetButton({
            key: "empty",
            title: "미 정",
            onPress: () => {
              setIsToVisible(false);
            },
          }),
          new M_BottomSheetButton({
            key: "empty",
            title: "날짜 선택",
            button: moment(to).format("YYYY/MM/DD hh:mm"),
            onPress: () => {
              setIsToVisible(true);
            },
          }),
        ]}
      />
      <TimePicker
        value={from}
        onChangeValue={onChangeFrom}
        maxDate={to}
        visible={isFromVisible}
      />
      <TimePicker
        value={to}
        onChangeValue={onChangeTo}
        minDate={from}
        visible={isToVisible}
      />
    </View>
  );
};

export default FromToTimePickers;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
