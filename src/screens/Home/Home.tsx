import {
  FlatList,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from 'src/components/Header';
import {RouteProps} from 'src/navigation';
import {assets, SIZES, users} from 'src/constants';
import {CAMERA_PAGE, PAYMEMT_PAGE, PROFILE_PAGE} from 'src/navigation/routes';
import PageContainer from 'src/components/PageContainer';
import HomeHeader from './Component/HomeHeader';
import GridView from './Component/GridView';
import CustomButton from 'src/components/CustomButton/CustomButton';
import Invite from './Component/Invite';
import ListItem from 'src/components/ListItem';

type ListType = {
  name?: string;
  image?: ImageSourcePropType;
  icon?: boolean;
  endIcon?: ImageSourcePropType;
};

let PeoplesList: ListType[] = [
  {
    name: 'Revan',
    image: users.User7Icon,
  },
  {
    name: 'Jack',
  },
  {
    name: 'Scott',
  },
  {
    name: 'Elly',
    image: users.User5Icon,
  },
  {
    name: 'Cally',
  },
  {
    name: 'Marina',
    image: users.User6Icon,
  },
  {
    name: 'Dory',
  },
  {
    name: 'Hank',
    image: users.User4Icon,
  },
  {
    name: 'Kiara',
    image: users.User1Icon,
  },
  {
    name: 'Alex',
    image: users.User2Icon,
  },
  {
    name: 'Bunny',
    image: users.User3Icon,
  },
  {
    name: 'ABC',
    image: users.User1Icon,
  },
];

PeoplesList = [
  ...PeoplesList.slice(0, 11),
  {image: assets.ArrowIcon, name: 'Show More', icon: true},
];

let BusinessList: ListType[] = [
  {
    image: assets.MakeMyTripIcon,
    name: 'MakeMyTrip',
  },
  {
    image: assets.RedbusIcon,
    name: 'redBus',
  },
  {
    image: assets.TataSkyIcon,
    name: 'Tata Sky',
  },
  {
    image: assets.YatraIcon,
    name: 'Yatra',
  },
  {
    image: assets.BaristaIcon,
    name: 'Barista',
  },
  {
    image: assets.McDIcon,
    name: 'Mc Donalds',
  },
  {
    image: assets.ZomatoIcon,
    name: 'Zomato',
  },
  {image: assets.ArrowIcon, name: 'Show More', icon: true},
];

let SpinAndWinList: ListType[] = [
  {
    image: assets.RewardsCircleIcon,
    name: 'Rewards',
  },
  {
    image: assets.OfferCircleIcon,
    name: 'Offers',
  },
  {
    image: assets.GoIndiaCircleIcon,
    name: 'Go India',
  },
  {
    image: assets.ReferalCircleIcon,
    name: 'Referrals',
  },
];

const optionList: ListType[] = [
  {
    name: 'Show transaction history',
    image: assets.TrxHistoryIcon,
    endIcon: assets.RightIcon,
  },
  {
    name: 'View account balance',
    image: assets.AccountBalanceIcon,
    endIcon: assets.RightIcon,
  },
];

const Home = (props: RouteProps) => {
  const {navigation} = props;

  return (
    <PageContainer style={{paddingHorizontal: 0, borderWidth: 1}}>
      <ScrollView
        contentContainerStyle={{}}
        scrollEnabled
        showsVerticalScrollIndicator={false}>
        <Header
          wrapperStyle={{paddingHorizontal: SIZES.large}}
          leftIcon={assets.QrScannerIcon}
          centerIcon={assets.GPayIcon}
          rightIcon={require('src/assets/images/user/user2.png')}
          rightIconStyle={{
            height: SIZES.large * 1.9,
            width: SIZES.large * 1.9,
          }}
          onPressRightIcon={() => navigation.push(PROFILE_PAGE)}
          onPressLeftIcon={() => navigation.push(CAMERA_PAGE)}
        />

        <HomeHeader />

        <View
          style={{
            backgroundColor: 'rgba(229, 229, 229, 0.3)',
            borderTopLeftRadius: SIZES.base * 2.5,
            borderTopRightRadius: SIZES.base * 2.5,
            flex: 1,
            paddingHorizontal: SIZES.medium,
            paddingTop: SIZES.small * 1.75,
          }}>
          <Text style={style.headingText}>People</Text>
          <GridView data={PeoplesList} />

          <View style={style.line} />
          <Text style={style.headingText}>Businesses and Bills</Text>
          <GridView data={BusinessList} />

          <View style={style.line} />
          <Text style={style.headingText}>Spend and win</Text>
          <GridView data={SpinAndWinList} />
          <View
            style={{
              marginTop: 40,
              marginBottom: 20,
            }}>
            {optionList.map((item, index) => (
              <ListItem
                key={index}
                startText={item.name}
                startIcon={item.image}
                endIcon={item.endIcon}
              />
            ))}
          </View>
          <Invite />
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: SIZES.extraLarge,
          zIndex: 2,
          width: '100%',
        }}>
        <CustomButton
          icon={assets.AddIcon}
          text="New Payment"
          style={{alignSelf: 'center'}}
          onPress={() => navigation.push(PAYMEMT_PAGE)}
        />
      </View>
    </PageContainer>
  );
};

export default Home;

const style = StyleSheet.create({
  headingText: {
    color: `#000`,
    fontWeight: '500',
    fontSize: SIZES.medium,
  },
  line: {
    height: SIZES.small / 4,
    backgroundColor: `#3C4043`,
    marginTop: SIZES.extraLarge,
    marginBottom: SIZES.medium,
  },
});
