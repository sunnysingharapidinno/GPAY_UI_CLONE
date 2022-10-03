import {
  GestureResponderEvent,
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';

type Props = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  icon?: ImageSourcePropType;
};

const CustomButton = (props: Props) => {
  const {text, onPress, textStyle, style, icon} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[currentStyle.buttonContainer, style]}>
      {icon && (
        <Image
          source={icon}
          style={[currentStyle.iconStyle]}
          resizeMode="contain"
        />
      )}

      <Text style={[currentStyle.textStyle, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const currentStyle = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#2571F0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small * 0.8,
    borderRadius: SIZES.extraLarge,
    flexDirection: 'row',
  },
  textStyle: {
    color: `#fff`,
    textAlign: 'center',
  },
  iconStyle: {
    height: SIZES.font,
    width: SIZES.font,
    marginRight: SIZES.base * 0.9,
  },
});
