import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Card = (props: Props) => {
  const {children, style} = props;
  return <View style={[currentStyle.container, style]}>{children}</View>;
};

export default Card;

const currentStyle = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.base * 1.25,
    paddingVertical: SIZES.font,
    borderRadius: SIZES.base,
    elevation: 20,
    backgroundColor: 'white',
  },
});
