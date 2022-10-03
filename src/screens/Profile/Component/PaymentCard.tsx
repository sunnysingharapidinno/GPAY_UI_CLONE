import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import Card from 'src/components/Card/Card';
import {assets, SIZES} from 'src/constants';
import IconButton from 'src/components/IconButton';

const PaymentCard = () => {
  return (
    <Card>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: SIZES.small,
            color: '#000',
          }}>
          Set up payment methods 1/2
        </Text>
        <IconButton
          icon={assets.ArrowForwardIcon}
          iconStyle={{height: SIZES.base * 2.5, width: SIZES.base * 2.5}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.font,
        }}>
        <TouchableOpacity style={[currentStyle.contentStyle]}>
          <Image
            source={assets.AccountBalanceIcon}
            style={{
              height: SIZES.extraLarge,
              width: SIZES.extraLarge,
              marginVertical: SIZES.font / 2,
            }}
            resizeMode="contain"
          />

          <Text style={[currentStyle.headText]}>Bank account</Text>
          <Text
            style={[
              currentStyle.headText,
              {
                color: '#979797',
              },
            ]}>
            1 account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[currentStyle.contentStyle]}>
          <Image
            source={assets.PayBussinessIcon}
            style={{
              height: SIZES.large * 2.2,
              width: SIZES.large * 2.2,
            }}
            resizeMode="contain"
          />
          <Text style={currentStyle.headText}>Pay bussinesses</Text>
          <Text
            style={[
              currentStyle.headText,
              {
                color: '#979797',
              },
            ]}>
            Debit/credit card
          </Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default PaymentCard;

const currentStyle = StyleSheet.create({
  headText: {
    fontWeight: '500',
    fontSize: SIZES.small,
    color: '#000',
  },
  contentStyle: {
    alignItems: 'center',
    flex: 1,
  },
});
