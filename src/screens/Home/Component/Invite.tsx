import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import CustomButton from 'src/components/CustomButton/CustomButton';
import {assets, SIZES} from 'src/constants';

const Invite = () => {
  const {width} = Dimensions.get('screen');
  return (
    <View style={{width: width, marginTop: 40}}>
      <Image
        source={assets.InviteIcon}
        resizeMode="contain"
        style={{
          width: '100%',
          height: 122,
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: -40,
        }}>
        <Text style={current.inviteHeader}>
          Invite your friends to Google Pay
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: SIZES.base * 1.3,
          }}>
          <Text style={current.inivteBaseText}>Copy your code </Text>
          <Text style={current.inivteCodeText}>abcd5j</Text>
          <Image
            source={assets.CopyIcon}
            resizeMode="contain"
            style={{
              width: SIZES.small,
              height: SIZES.small,
              marginLeft: SIZES.base / 2,
            }}
          />
        </View>
        <CustomButton
          text="Invite"
          textStyle={current.inviteButtonText}
          style={[current.inviteButton]}
        />
      </View>
    </View>
  );
};

export default Invite;

const current = StyleSheet.create({
  inviteHeader: {
    fontSize: SIZES.font,
    fontWeight: '500',
    color: '#000',
  },
  inivteBaseText: {
    fontWeight: '400',
    fontSize: SIZES.small - 1,
    color: '#000',
  },
  inivteCodeText: {
    fontWeight: '600',
    fontSize: SIZES.small,
    color: '#000',
  },
  inviteButton: {
    width: SIZES.extraLarge * 2.5,
    height: SIZES.extraLarge,
    paddingHorizontal: 0,
    paddingVertical: 0,
    backgroundColor: '#fff',
    borderColor: '#DADADA',
    borderWidth: 1,
    borderRadius: SIZES.base * 1.3,
  },
  inviteButtonText: {color: '#000', fontSize: SIZES.small, fontWeight: '500'},
});
