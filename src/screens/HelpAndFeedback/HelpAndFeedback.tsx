import {FlatList, ImageSourcePropType} from 'react-native';
import React from 'react';
import Header from 'src/components/Header';
import PageContainer from 'src/components/PageContainer';
import {RouteProps} from 'src/navigation';
import {assets, SIZES} from 'src/constants';
import ListItem from 'src/components/ListItem';

type ListItemTypes = {
  icon?: ImageSourcePropType;
  label?: string;
  route?: string;
};

const ListItems: ListItemTypes[] = [
  {icon: assets.HelpIcon, label: 'Get help'},
  {icon: assets.SendFeedbackIcon, label: 'Send feedback'},
  {icon: assets.DocumentIcon, label: 'Terms of Service'},
  {icon: assets.LockIcon, label: 'Privacy policy'},
  {icon: assets.SmartPhoneAlertIcon, label: 'Software licences'},
  {
    icon: assets.InfoIcon,
    label: 'Version 120.1.3(arm64-\nv8a_release_flutter)',
  },
];

const HelpAndFeedback = (props: RouteProps) => {
  const {navigation} = props;
  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftText={`Help and feedback`}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
      />
      <FlatList
        style={{marginTop: SIZES.font * 1.8}}
        data={ListItems}
        renderItem={({item, index}) => (
          <ListItem
            style={{marginVertical: SIZES.small / 2.4}}
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

export default HelpAndFeedback;
