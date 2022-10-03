import {
  View,
  Text,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React from 'react';
import {SIZES} from 'src/constants';

type Props = {
  name?: string;
  image?: ImageSourcePropType;
  icon?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const ProfileIcon = (props: Props) => {
  const {image, name, icon, style, textStyle} = props;
  return (
    <View
      style={[
        {
          borderRadius: 100 / 2,
          height: SIZES.extraLarge * 1.8,
          width: SIZES.extraLarge * 1.8,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: `#DADADA`,
          shadowOffset: {width: 1, height: 2},
          elevation: SIZES.small,
        },
        style,
      ]}>
      {image ? (
        <Image
          style={{
            height: icon ? SIZES.base * 2.5 : SIZES.extraLarge * 1.8,
            width: icon ? SIZES.base * 2.5 : SIZES.extraLarge * 1.8,
          }}
          source={image}
          resizeMode="contain"
        />
      ) : (
        <Text
          style={[
            {
              textTransform: 'uppercase',
              fontWeight: '500',
              fontSize: SIZES.medium,
            },
            textStyle,
          ]}>
          {name?.charAt(0)}
        </Text>
      )}
    </View>
  );
};

export default ProfileIcon;
