import React from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Dimensions,
  View,
  Image,
} from 'react-native';
import Header from 'src/components/Header';
import ListItem from 'src/components/ListItem';
import PageContainer from 'src/components/PageContainer';
import {assets, SIZES} from 'src/constants';
import {RouteProps} from 'src/navigation';
import {HELP_AND_FEEDBACK_PAGE, SETTINGS_PAGE} from 'src/navigation/routes';
import PaymentCard from './Component/PaymentCard';
import ProfileHeader from './Component/ProfileHeader';

type ListItemTypes = {
  icon?: ImageSourcePropType;
  label?: string;
  route?: string;
};

const ListItems: ListItemTypes[] = [
  {icon: assets.SettingsIcon, label: 'Settings', route: SETTINGS_PAGE},
  {
    icon: assets.HelpIcon,
    label: 'Help and feedback',
    route: HELP_AND_FEEDBACK_PAGE,
  },
];

const Profile = (props: RouteProps) => {
  const {navigation} = props;
  const {width} = Dimensions.get('window');
  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
      />
      <View>
        <ProfileHeader
          style={{
            left: -SIZES.large,
            position: 'absolute',
            width: width,
          }}
        />
      </View>
      <View style={{marginTop: SIZES.medium * 8}} />
      <PaymentCard />
      <FlatList
        data={ListItems}
        renderItem={({item, index}) => (
          <ListItem
            onPress={() => item.route && navigation.push(item.route)}
            style={{
              marginVertical: SIZES.small / 3,
              backgroundColor: `transparent`,
            }}
            startIcon={item.icon}
            startText={item.label}
          />
        )}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default Profile;
