import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';
import ProfileIcon from 'src/components/ProfileIcon';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const ProfileHeader = (props: Props) => {
  const {style} = props;
  return (
    <View style={[style]}>
      <ImageBackground
        source={assets.ProfileIcon}
        resizeMode="cover"
        style={{
          width: '100%',
          paddingBottom: SIZES.medium,
          paddingTop: SIZES.base,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 1, paddingLeft: SIZES.font * 2}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                marginBottom: SIZES.base / 2,
                color: '#000',
              }}>
              Justin Folly
            </Text>
            <Text style={[currentStyle.leftContentText2]}>+91 9512345678</Text>
            <Text style={[currentStyle.leftContentText2]}>
              justinfolly123@oksbi
            </Text>
            <View
              style={{
                marginTop: SIZES.large,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={assets.RewardsIcon}
                resizeMode="contain"
                style={{height: SIZES.font * 2.1, width: SIZES.font * 2.1}}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#000',
                  marginHorizontal: SIZES.small,
                }}>
                ₹ 182
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  color: '#000',
                }}>
                Rewards Earned
              </Text>
            </View>
          </View>
          <View>
            <View style={{marginRight: SIZES.extraLarge * 1.75}}>
              <ProfileIcon
                name="Justin Folly"
                style={{
                  height: SIZES.extraLarge * 3.3,
                  width: SIZES.extraLarge * 3.3,
                  backgroundColor: '#DEECF1',
                  elevation: 0,
                }}
                textStyle={{
                  fontSize: SIZES.large * 1.9,
                  fontWeight: '500',
                  color: '#000',
                }}
              />

              <Image
                source={assets.ZoomIcon}
                style={{
                  position: 'absolute',
                  right: 0,
                  bottom: 0,
                  height: SIZES.font * 2 - 1,
                  width: SIZES.font * 2 - 1,
                }}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileHeader;

const currentStyle = StyleSheet.create({
  leftContentText2: {
    fontSize: 14,
    fontWeight: '300',
    color: '#000',
  },
});
