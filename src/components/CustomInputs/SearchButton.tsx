import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const SearchButton = (props: Props) => {
  const {style} = props;
  return (
    <View style={[{justifyContent: 'center'}, style]}>
      <Image
        source={assets.SearchIcon}
        resizeMode="contain"
        style={{
          width: SIZES.large * 1.2,
          height: SIZES.large * 1.2,
          position: 'absolute',
          zIndex: 1,
          left: SIZES.small,
        }}
      />
      <TextInput
        placeholder="Search mobile number"
        style={{
          paddingLeft: SIZES.extraLarge * 1.9,
          backgroundColor: '#E5E5E5',
          borderRadius: SIZES.base / 1.5,
        }}
      />
    </View>
  );
};

export default SearchButton;

const currentStyles = StyleSheet.create({});
