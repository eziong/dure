import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import moment, { max } from "moment";

type Props = {
  value: Date;
  onChangeValue: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  visible: boolean;
};

const TimePicker = ({
  value,
  onChangeValue,
  minDate,
  maxDate,
  visible,
}: Props) => {
  const [timePickerSequence, setTimePickerSequence] = useState<number>(0);

  useEffect(() => {
    if (visible) setTimePickerSequence(1);
    else setTimePickerSequence(0);
  }, [visible]);

  const onChangeDatePicker = (e: DateTimePickerEvent, date?: Date) => {
    date && onChangeValue(date);
    setTimePickerSequence((prev) => (prev + 1) % 3);
  };
  return (
    <>
      {timePickerSequence === 0 ? null : (
        <DateTimePicker
          mode={timePickerSequence === 1 ? "date" : "time"}
          onChange={onChangeDatePicker}
          value={value}
          minimumDate={minDate ? minDate : undefined}
          maximumDate={maxDate ? maxDate : undefined}
        />
      )}
    </>
  );
};

export default TimePicker;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    width: 144,
    height: 32,
    borderRadius: 5,
  },
});
