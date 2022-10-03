import {
  View,
  StyleSheet,
  Image,
  ImageStyle,
  StyleProp,
  ImageSourcePropType,
  TouchableOpacity,
  GestureResponderEvent,
  Text,
} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';

type Props = {
  wrapperStyle?: StyleProp<ImageStyle>;
  leftIconStyle?: StyleProp<ImageStyle>;
  rightIconStyle?: StyleProp<ImageStyle>;
  centerIconStyle?: StyleProp<ImageStyle>;
  leftIcon?: ImageSourcePropType;
  rightIcon?: ImageSourcePropType;
  centerIcon?: ImageSourcePropType;
  onPressLeftIcon?: ((event: GestureResponderEvent) => void) | undefined;
  onPressCenterIcon?: ((event: GestureResponderEvent) => void) | undefined;
  onPressRightIcon?: ((event: GestureResponderEvent) => void) | undefined;
  leftText?: string;
  centerComponent?: () => React.ReactNode;
};

const Header = (props: Props) => {
  const {
    leftIconStyle,
    rightIconStyle,
    wrapperStyle,
    centerIconStyle,
    centerIcon,
    leftIcon,
    rightIcon,
    onPressCenterIcon,
    onPressLeftIcon,
    onPressRightIcon,
    leftText,
    centerComponent,
  } = props;
  const currentStyle = style;
  return (
    <View style={[currentStyle.wrapper, wrapperStyle]}>
      {(leftIcon || leftText) && (
        <View style={currentStyle.section}>
          {leftIcon && (
            <TouchableOpacity onPress={onPressLeftIcon}>
              <Image
                source={leftIcon}
                style={[currentStyle.leftIcon, leftIconStyle]}
                resizeMode="contain"
              />
            </TouchableOpacity>
          )}

          {leftText && (
            <Text style={[currentStyle.text, {marginLeft: SIZES.font}]}>
              {leftText}
            </Text>
          )}
        </View>
      )}
      {centerComponent && centerComponent()}
      {centerIcon && (
        <TouchableOpacity onPress={onPressCenterIcon}>
          <Image
            source={centerIcon}
            style={[currentStyle.centerIcon, centerIconStyle]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}

      {rightIcon && (
        <TouchableOpacity onPress={onPressRightIcon}>
          <Image
            source={rightIcon}
            style={[currentStyle.rightIcon, rightIconStyle]}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  wrapper: {
    height: SIZES.medium * 2.18,
    width: '100%',
    paddingVertical: SIZES.base * 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftIcon: {
    height: SIZES.font * 2.14,
    width: SIZES.font * 2.14,
  },
  centerIcon: {
    height: SIZES.font * 2,
    width: SIZES.extraLarge * 2.9,
  },
  rightIcon: {
    height: SIZES.base * 2.2,
    width: SIZES.base * 2.2,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: SIZES.large,
    color: `#000`,
  },
});
