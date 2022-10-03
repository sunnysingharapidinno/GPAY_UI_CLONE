import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import Card from '../Card/Card';
import {SIZES} from 'src/constants';

type Props = {
  icon: ImageSourcePropType;
  text?: string;
  iconStyle?: StyleProp<ImageStyle>;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
};

const CardButton = (props: Props) => {
  const {text, icon, style, iconStyle, textStyle, onPress, disabled} = props;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} disabled={disabled}>
      <Card style={[currentStyle.cardContainer, style]}>
        <Image
          source={icon}
          style={[currentStyle.iconStyle, iconStyle]}
          resizeMode="contain"
        />
        {text && (
          <Text style={[currentStyle.textStyle, textStyle]}>{text}</Text>
        )}
      </Card>
    </TouchableOpacity>
  );
};

export default CardButton;

const currentStyle = StyleSheet.create({
  cardContainer: {
    paddingVertical: SIZES.small,
    paddingHorizontal: SIZES.small,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft: SIZES.medium,
    fontSize: SIZES.small,
    fontWeight: '500',
    color: '#000',
  },
  iconStyle: {
    height: SIZES.extraLarge,
    width: SIZES.extraLarge,
  },
});
