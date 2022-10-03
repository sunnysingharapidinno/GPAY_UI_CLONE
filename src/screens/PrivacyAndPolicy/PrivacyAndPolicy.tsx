import {
  ImageSourcePropType,
  FlatList,
  View,
  Switch,
  SwitchChangeEvent,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';
import {RouteProps} from 'src/navigation';
import PageContainer from 'src/components/PageContainer';
import Header from 'src/components/Header';
import ListItem from 'src/components/ListItem';

type ListItemTypes = {
  icon?: ImageSourcePropType;
  label?: string;
  route?: string;
  baseText?: string;
  onToggel?: ((event: SwitchChangeEvent) => void | Promise<void>) | null;
};

const ListItems: ListItemTypes[] = [
  {icon: assets.LockIcon, label: 'Security', baseText: 'Screen lock'},
  {
    icon: assets.PersonOutlineIcon,
    label: 'Allow people to find you',
    baseText:
      'Allow people with your mobile number to \nconnect with you across Google services',
    onToggel(event) {},
  },
  {
    icon: assets.BookIcon,
    label: 'Sync your conacts',
    baseText:
      'We’ll use your contact to help you find \nfriends and avoid fraud',
    onToggel(event) {},
  },
  {
    icon: assets.VerifiedUserIcon,
    label: 'Blocked people',
    baseText: 'Resume interaction with people who you’ve \nblocked',
  },
];

const PrivacyAndPolicy = (props: RouteProps) => {
  const {navigation} = props;

  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftText={`Privacy and security`}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
      />
      <FlatList
        style={{marginTop: SIZES.font * 1.8}}
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
              startIcon={item.icon}
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

export default PrivacyAndPolicy;
