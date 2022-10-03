import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {ViewStyle} from 'react-native';
import {ImageStyle} from 'react-native';
import {SIZES} from 'src/constants';

type Props = {
  style?: StyleProp<ViewStyle>;
  startIcon?: ImageSourcePropType;
  startIconStyle?: StyleProp<ImageStyle>;
  startText?: string;
  startBaseText?: string;
  startTextStyle?: StyleProp<TextStyle>;
  startBaseTextStyle?: StyleProp<TextStyle>;
  endIcon?: ImageSourcePropType;
  endIconStyle?: StyleProp<ImageStyle>;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
};

const ListItem = (props: Props) => {
  const {
    startIcon,
    startIconStyle,
    style,
    startText,
    startTextStyle,
    onPress,
    startBaseText,
    startBaseTextStyle,
    endIcon,
    endIconStyle,
    disabled,
  } = props;
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 10,
          backgroundColor: `rgba(229, 229, 229, 0.3)`,
        },
        style,
      ]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {startIcon && (
          <Image
            source={startIcon}
            resizeMode="contain"
            style={[
              {
                height: SIZES.small * 1.6,
                width: SIZES.small * 1.6,
                marginVertical: SIZES.base * 1.9,
                marginLeft: SIZES.base,
                marginRight: SIZES.medium,
              },
              startIconStyle,
            ]}
          />
        )}

        {(startText || startBaseText) && (
          <View>
            {startText && (
              <Text
                style={[
                  {
                    fontWeight: '500',
                    fontSize: SIZES.font,
                    color: `#000`,
                  },
                  startTextStyle,
                ]}>
                {startText}
              </Text>
            )}
            {startBaseText && (
              <Text
                style={[
                  {
                    fontWeight: '500',
                    fontSize: SIZES.small / 1.2,
                    color: `#6B7278`,
                  },
                  startBaseTextStyle,
                ]}>
                {startBaseText}
              </Text>
            )}
          </View>
        )}
      </View>
      {endIcon && (
        <View>
          <Image
            source={endIcon}
            style={[{height: 24, width: 24}, endIconStyle]}
            resizeMode="contain"
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ListItem;
