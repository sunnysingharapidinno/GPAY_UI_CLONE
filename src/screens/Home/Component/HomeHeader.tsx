import {View, Image} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';

const HomeHeader = () => {
  return (
    <View>
      <Image
        source={assets.ProfileGooglePayIcon}
        resizeMode="contain"
        style={{width: '100%', height: SIZES.extraLarge * 4.5}}
      />
      <View style={{alignItems: 'center'}}>
        <Image
          source={assets.PeopleGooglePayIcon}
          resizeMode="contain"
          style={{
            width: SIZES.extraLarge * 7.7,
            height: SIZES.extraLarge * 5.2,
          }}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
