import { StyleProp, ViewStyle } from "react-native";

export class M_BottomSheetButton {
  key: string;
  title: string | React.ReactElement;
  button?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;

  constructor({
    key,
    title,
    button,
    onPress,
    containerStyle,
    disable,
  }: {
    key: string;
    title: string | React.ReactElement;
    button?: string;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    disable?: boolean;
  }) {
    this.key = key;
    this.title = title;
    this.button = button;
    this.onPress = onPress;
    this.containerStyle = containerStyle;
    this.disable = disable;
  }
}
