import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { M_BottomSheetButton } from "@src/classes/button";

type Props = {
  placeholder: string;
  buttons: M_BottomSheetButton[];
  buttonContainer?: StyleProp<ViewStyle>;
};

const BottomSheetButton = ({
  placeholder,
  buttons,
  buttonContainer,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedButton, setSelectedButton] =
    useState<M_BottomSheetButton | null>(null);

  const onPressVisible = () => {
    setIsVisible(true);
  };

  const onPressInvisible = () => {
    setIsVisible(false);
  };

  const getButtonString = () => {
    if (!selectedButton) return placeholder;
    return selectedButton.button ? selectedButton.button : selectedButton.title;
  };

  return (
    <View>
      <Pressable
        onPress={onPressVisible}
        style={buttonContainer ? buttonContainer : styles.container}
      >
        <Text>{getButtonString()}</Text>
      </Pressable>
      <BottomSheet isVisible={isVisible} onBackdropPress={onPressInvisible}>
        {buttons.map((button, index) => (
          <ListItem
            key={index}
            containerStyle={
              button.containerStyle
                ? button.containerStyle
                : styles.buttonContainer
            }
            onPress={() => {
              button.onPress();
              setSelectedButton(button);
              onPressInvisible();
            }}
            disabled={button.disable}
          >
            <ListItem.Content>
              <ListItem.Title>{button.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </BottomSheet>
    </View>
  );
};

export default BottomSheetButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonContainer: {},
});
