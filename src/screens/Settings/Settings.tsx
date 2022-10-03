import {
  View,
  Text,
  ImageSourcePropType,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from 'src/components/Header';
import {assets, SIZES} from 'src/constants';
import ListItem from 'src/components/ListItem';
import {RouteProps} from 'src/navigation';
import PageContainer from 'src/components/PageContainer';
import {
  NOTIFICATIONS_AND_EMAIL_PAGE,
  PERSONAL_INFO_PAGE,
  PRIVACY_AND_SECURITY_PAGE,
} from 'src/navigation/routes';

type ListItemTypes = {
  icon?: ImageSourcePropType;
  label?: string;
  route?: string;
};

const ListItems: ListItemTypes[] = [
  {
    icon: assets.UserProfileIcon,
    label: 'Personal Info',
    route: PERSONAL_INFO_PAGE,
  },
  {
    icon: assets.NotificationsNoneIcon,
    label: 'Notification and emails',
    route: NOTIFICATIONS_AND_EMAIL_PAGE,
  },
  {
    icon: assets.SecurityIcon,
    label: 'Privacy and security',
    route: PRIVACY_AND_SECURITY_PAGE,
  },
  {icon: assets.AssignmentIcon, label: 'Raise BBPS dispute'},
  {icon: assets.HelpIcon, label: 'Help & feedback'},
  {icon: assets.LogOutIcon, label: 'Log out'},
  {icon: assets.PowerSettingsNewIcon, label: 'Close account'},
];

const Settings = (props: RouteProps) => {
  const {navigation} = props;
  return (
    <PageContainer>
      <Header
        onPressLeftIcon={() => navigation.goBack()}
        leftIcon={assets.CloseIcon}
        rightIcon={assets.MenuIcon}
      />
      <Text
        style={{
          fontWeight: '500',
          fontSize: SIZES.large,
          marginTop: SIZES.small,
          marginBottom: SIZES.font,
          color: `#000`,
        }}>
        Settings
      </Text>

      <FlatList
        data={ListItems}
        renderItem={({item, index}) => (
          <>
            {index === 4 && (
              <View
                style={{
                  borderWidth: SIZES.small / 4,
                  borderColor: `#DADADA`,
                  marginVertical: SIZES.font,
                }}
              />
            )}
            <ListItem
              onPress={() => {
                if (item.route) {
                  navigation.push(item.route);
                }
              }}
              style={{marginVertical: SIZES.small / 2.4}}
              startIcon={item.icon}
              startText={item.label}
            />
          </>
        )}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default Settings;
