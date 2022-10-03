import {
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  StyleSheet,
  ImageStyle,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';

type Props = {
  icon: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
};

const IconButton = (props: Props) => {
  const {icon, style, iconStyle} = props;
  return (
    <TouchableOpacity style={style}>
      <Image source={icon} style={[currentStyle.iconStyle, iconStyle]} />
    </TouchableOpacity>
  );
};

export default IconButton;

const currentStyle = StyleSheet.create({
  iconStyle: {
    height: SIZES.medium * 1.8,
    width: SIZES.medium * 1.8,
  },
});
