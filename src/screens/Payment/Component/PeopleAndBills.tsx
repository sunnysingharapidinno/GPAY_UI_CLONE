import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import CardButton from 'src/components/CustomButton/CardButton';
import {assets, SIZES, users} from 'src/constants';
import ListItem from 'src/components/ListItem';
import ProfileIcon from 'src/components/ProfileIcon';

type ListItemType = {
  name: string;
  icon: ImageSourcePropType;
  onPress?: () => void;
};

type ContactListType = {
  name: string;
  number: string;
  image?: ImageSourcePropType;
};

const ListItems: ListItemType[] = [
  {
    icon: assets.AccountBalanceIcon,
    name: 'Bank \ntransfer',
  },
  {
    icon: assets.PhonelinkEraseIcon,
    name: 'Phone \nnumber',
  },
  {
    icon: assets.QRIcon,
    name: 'UPI ID \nor QR',
  },
  {
    icon: assets.SelfTransferIcon,
    name: 'Self-\ntransfer',
  },
];

const ContactList: ContactListType[] = [
  {
    name: 'Kaira',
    number: '+91 9512345678',
    image: users.User1Icon,
  },
  {
    name: 'Revan',
    number: '+91 9512345678',
    image: users.User7Icon,
  },
  {
    name: 'Scott',
    number: '+91 9512345678',
  },
  {
    name: 'Alex',
    number: '+91 9512345678',
    image: users.User2Icon,
  },
  {
    name: 'Elly',
    number: '+91 9512345678',
    image: users.User5Icon,
  },
  {
    name: 'Jack',
    number: '+91 9512345678',
  },
  {
    name: 'Bunny',
    number: '+91 9512345678',
    image: users.User3Icon,
  },
  {
    name: 'Dory',
    number: '+91 9512345678',
  },
  {
    name: 'Hank',
    number: '+91 9512345678',
    image: users.User4Icon,
  },
];

type Props = {};

const PeopleAndBills = (props: Props) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <>
          <Text
            style={[
              currentStyle.headTopic,
              {
                marginTop: SIZES.extraLarge,
                marginBottom: SIZES.small,
              },
            ]}>
            Recharged and pay bills
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: SIZES.extraLarge,
            }}>
            <CardButton
              text={'Mobile \nRecharged'}
              icon={assets.PhoneIphoneIcon}
              style={[
                currentStyle.cardButtonStyle,
                {marginRight: SIZES.medium},
              ]}
            />
            <CardButton
              icon={assets.InvoiceIcon}
              style={[currentStyle.cardButtonStyle]}
              text={'Bill Payment'}
            />
          </View>
          <Text
            style={[
              currentStyle.headTopic,
              {
                marginBottom: SIZES.font,
              },
            ]}>
            Transfer Money
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginBottom: SIZES.extraLarge,
            }}>
            {ListItems.map((item, index) => (
              <TouchableOpacity key={index} activeOpacity={0.8}>
                <CardButton
                  disabled
                  icon={item.icon}
                  style={[currentStyle.iconCardStyle]}
                />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: SIZES.small,
                    fontWeight: '400',
                    color: '#000',
                    marginTop: 10,
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      }
      data={ContactList}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: `rgba(229, 229, 229, 0.3)`,
            paddingVertical: SIZES.base,
            paddingLeft: SIZES.font,
            marginVertical: SIZES.base / 4 + 1,
            borderRadius: SIZES.base * 1.2,
          }}>
          <ProfileIcon image={item.image} name={item.name} />
          <ListItem
            disabled
            startText={item.name}
            startBaseText={item.number}
            style={{
              width: '100%',
              marginLeft: SIZES.extraLarge,
              backgroundColor: 'transparent',
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default PeopleAndBills;

const currentStyle = StyleSheet.create({
  cardButtonStyle: {
    width: SIZES.font * 10 + 10,
    height: 45,
    paddingVertical: 0,
  },
  headTopic: {
    fontSize: SIZES.small,
    fontWeight: '500',
    color: '#000',
  },
  iconCardStyle: {
    width: SIZES.extraLarge * 2,
    height: SIZES.extraLarge * 2,
  },
});
