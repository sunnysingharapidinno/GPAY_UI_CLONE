import {
  ImageSourcePropType,
  FlatList,
  View,
  SwitchChangeEvent,
  TouchableOpacity,
  Text,
} from 'react-native';
import React from 'react';
import {assets, SIZES} from 'src/constants';
import {RouteProps} from 'src/navigation';
import PageContainer from 'src/components/PageContainer';
import Header from 'src/components/Header';
import ListItem from 'src/components/ListItem';
import ProfileIcon from 'src/components/ProfileIcon';
import IconButton from 'src/components/IconButton';

type ListItemTypes = {
  icon?: ImageSourcePropType;
  label?: string;
  baseText?: string;
  endText?: string;
  onPressEndText?: () => void;
};

const ListItems: ListItemTypes[] = [
  {
    icon: assets.SmartPhoneAlertIcon,
    label: 'Mobile number',
    baseText: '+91 9512345678',
    endText: 'Edit',
    onPressEndText: () => {},
  },
  {
    icon: assets.EmailIcon,
    label: 'Email',
    baseText: 'justinfolly123@gmail.com',
  },
  {
    icon: assets.LanguageIcon,
    label: 'Language',
    baseText: 'English',
    endText: 'Change',
    onPressEndText: () => {},
  },
];

const PersonalInfo = (props: RouteProps) => {
  const {navigation} = props;

  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftText={`Personal info`}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
      />

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: SIZES.medium * 2,
          marginBottom: SIZES.extraLarge * 3.8,
        }}>
        <ProfileIcon
          name="James"
          textStyle={{
            fontSize: SIZES.medium * 2.2,
          }}
          style={{
            height: SIZES.extraLarge * 4.16,
            width: SIZES.extraLarge * 4.16,
            elevation: 0,
          }}
        />
        <IconButton
          icon={assets.EditIcon}
          style={{position: 'absolute', bottom: 0, right: SIZES.base / 2}}
        />
      </View>

      <FlatList
        data={ListItems}
        renderItem={({item, index}) => (
          <View
            style={{
              justifyContent: 'center',
            }}>
            <ListItem
              style={{
                marginVertical: SIZES.small / 2.4,
                paddingVertical: SIZES.base,
                paddingLeft: SIZES.base,
              }}
              startIcon={item.icon}
              startText={item.label}
              startBaseText={item.baseText}
            />
            {item.endText && (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: SIZES.small,
                }}
                onPress={() => {
                  if (item.onPressEndText) {
                    item.onPressEndText();
                  }
                }}>
                <Text
                  style={{
                    color: '#2571F0',
                    fontSize: SIZES.font,
                    fontWeight: '600',
                  }}>
                  {item.endText}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        keyExtractor={(_, index) => `${index}`}
        showsVerticalScrollIndicator={false}
      />
    </PageContainer>
  );
};

export default PersonalInfo;
