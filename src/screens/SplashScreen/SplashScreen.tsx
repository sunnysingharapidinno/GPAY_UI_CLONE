import {Image} from 'react-native';
import React from 'react';
import PageContainer from 'src/components/PageContainer';
import {assets, SIZES} from 'src/constants';

const SplashScreen = () => {
  return (
    <PageContainer innerViewStyle={{justifyContent: 'center'}}>
      <Image
        source={assets.GooglePaySeekLogoIcon}
        style={{
          height: SIZES.large * 7,
          width: SIZES.extraLarge * 6.2,
          alignSelf: 'center',
        }}
        resizeMode="contain"
      />
      <Image
        source={assets.GoogleIcon}
        style={{
          height: SIZES.extraLarge * 2,
          width: SIZES.extraLarge * 6.2,
          alignSelf: 'center',
          position: 'absolute',
          bottom: SIZES.medium * 4.3,
        }}
        resizeMode="contain"
      />
    </PageContainer>
  );
};

export default SplashScreen;
