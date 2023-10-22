import { StyleProp, ViewStyle } from "react-native";

export class M_BottomSheetButton {
  key: string;
  title: string | React.ReactElement;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  disable?: boolean;

  constructor({
    key,
    title,
    onPress,
    containerStyle,
    disable,
  }: {
    key: string;
    title: string | React.ReactElement;
    onPress: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    disable?: boolean;
  }) {
    this.key = key;
    this.title = title;
    this.onPress = onPress;
    this.containerStyle = containerStyle;
    this.disable = disable;
  }
}
