import {
  View,
  Text,
  FlatList,
  SwitchChangeEvent,
  Switch,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';
import {RouteProps} from 'src/navigation';
import PageContainer from 'src/components/PageContainer';
import Header from 'src/components/Header';
import ListItem from 'src/components/ListItem';

type ListItemTypes = {
  label?: string;
  baseText?: string;
  onToggel?: ((event: SwitchChangeEvent) => void | Promise<void>) | null;
};

const ListItems: ListItemTypes[] = [
  {
    label: 'Google Pay Tips',
    baseText:
      'Get tips on getting the most out of Google Pay, \nmade just for you',
    onToggel(event) {},
  },
  {
    label: `Friends' activity`,
    baseText:
      'Receive alerts about what’s new with your \ncontacts and friends',
    onToggel(event) {},
  },
  {
    label: 'Smart Alerts',
    baseText: 'Get notified of payment requests and upcoming \nbills',
    onToggel(event) {},
  },
  {
    label: 'Offers & Rewards',
    baseText:
      'Find out when you earn new rewards, and stay \nup to date on offers',
    onToggel(event) {},
  },
  {
    label: 'Transaction history and \nrecommendations',
    baseText:
      'Get summaries and useful recommendations \nbased on your Google Pay transaction history',
    onToggel(event) {},
  },
  {
    label: 'Chat messages',
    baseText: 'Get notified about incoming chat messages',
    onToggel(event) {},
  },
  {
    label: 'Location-based alerts',
    baseText:
      'Turn on background location to get timely \nreminders from shops around you',
    onToggel(event) {},
  },
  {
    label: 'Order updates',
    baseText: 'Get notified about updates to your orders',
    onToggel(event) {},
  },
];
const NotificationAndEmail = (props: RouteProps) => {
  const {navigation} = props;

  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftText={`Notifications and emails`}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
      />
      <Text
        style={[
          currentStyle.headingText,
          {
            marginTop: SIZES.small,
          },
        ]}>
        You’ll get a notification after every payment transaction. Manage all
        other notification here.
      </Text>
      <Text
        style={{
          fontWeight: '600',
          fontSize: SIZES.font,
          color: `#6B7278`,
          marginVertical: SIZES.base * 2.8,
        }}>
        NOTIFICATIONS
      </Text>
      <FlatList
        data={ListItems}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <ListItem
              style={{
                marginVertical: SIZES.small / 2.4,
                width: '100%',
                paddingVertical: SIZES.base,
                paddingLeft: SIZES.base,
              }}
              startText={item.label}
              startBaseText={item.baseText}
            />
            {item.onToggel && (
              <Switch
                style={{position: 'absolute', right: SIZES.medium}}
                onChange={item.onToggel}
              />
            )}
          </View>
        )}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default NotificationAndEmail;

const currentStyle = StyleSheet.create({
  headingText: {
    fontSize: SIZES.font,
    fontWeight: '400',
    color: `#000000`,
  },
});
