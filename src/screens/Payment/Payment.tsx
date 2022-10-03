import React, {useState} from 'react';
import PageContainer from 'src/components/PageContainer';
import Header from 'src/components/Header';
import {assets, SIZES} from 'src/constants';
import {RouteProps} from 'src/navigation';
import SearchButton from 'src/components/CustomInputs/SearchButton';
import {Text, View} from 'react-native';
import CustomTab from 'src/components/CustomTab/CustomTab';
import PeopleAndBills from './Component/PeopleAndBills';
import Businesses from './Component/Businesses';

const Payment = (props: RouteProps) => {
  const {navigation} = props;
  const [active, setActive] = useState(false);
  return (
    <PageContainer>
      <Header
        leftIcon={assets.LeftIcon}
        leftIconStyle={{height: SIZES.medium, width: SIZES.medium}}
        onPressLeftIcon={() => navigation.goBack()}
        rightIcon={assets.MenuIcon}
        centerComponent={() => (
          <SearchButton style={{width: '80%', height: SIZES.large * 2.2}} />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: SIZES.small * 1.6,
        }}>
        <CustomTab
          text={'People and bills'}
          active={!active}
          onPress={() => setActive(false)}
        />
        <View style={{width: SIZES.large * 2}} />
        <CustomTab
          text={'Businesses'}
          active={active}
          onPress={() => setActive(true)}
        />
      </View>

      {active ? <Businesses /> : <PeopleAndBills />}
    </PageContainer>
  );
};

export default Payment;
