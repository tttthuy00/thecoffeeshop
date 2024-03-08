import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import Review_request from '../screens/Main/HomeTab/Review_request';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Startup_screen from '../screens/Begin/Startup_screen';
import Authorization from '../screens/Begin/Authorization';
import Home from '../screens/Main/HomeTab/Home';
import FastImage from 'react-native-fast-image';
import { COLOR, ICON } from '../constants/Theme';
import { appStyle, windowHeight } from '../constants/AppStyle';
import Registration from '../screens/Begin/Registration';
import MyorderCurrent from '../screens/Main/HistoryTab/MyorderCurrent';
import MyorderHistory from '../screens/Main/HistoryTab/MyorderHistory';
import { Image, Text, View } from 'react-native';
import Account from '../screens/Main/ProfileTab/Account';
import Forgot_password from '../screens/Begin/Forgot_password';
import MyCart from '../screens/Main/HomeTab/MyCart';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const StackBegin = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown:false}}>
    //       <Stack.Screen name="Current" component={MyorderCurrent}/>
    //       <Stack.Screen name="History" component={MyorderHistory}/>
    //       <Stack.Screen name="Report" component={Review_request}/>
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator
    //     initialRouteName="Start"
    //     screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name='Start' component={Startup_screen} />
    //     <Stack.Screen name='Authorization' component={Authorization} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <Stack.Navigator
      initialRouteName="Start"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Start' component={Startup_screen} />
      <Stack.Screen name='Authorization' component={Authorization} />
      <Stack.Screen name='Registration' component={Registration} />
      <Stack.Screen name='ForgotPassword' component={Forgot_password} />
    </Stack.Navigator>


  )
};

const StackHome = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
      <Stack.Screen name="MyCart" component={MyCart}></Stack.Screen>


    </Stack.Navigator>
  )
};

const StackHistory = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MyorderCurrent" component={MyorderCurrent}></Stack.Screen>
      <Stack.Screen name="MyorderHistory" component={MyorderHistory}></Stack.Screen>
    </Stack.Navigator>
  )
};

const StackProfile = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={Account}></Stack.Screen>
    </Stack.Navigator>
  )
};

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="StackHome"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = focused;

          if (route.name === 'StackHome') {
            iconName = focused ? ICON.HomeFocus : ICON.Home;
            label = "Trang chủ";


          } else if (route.name === 'StackHistory') {
            iconName = focused ? ICON.HistoryFocus : ICON.History;
            label = "Lịch sử";

          } else if (route.name === 'StackProfile') {
            iconName = focused ? ICON.AccountFocus : ICON.Account;
            label = "Hồ sơ";
          }
          // You can return any component that you like here!
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View>
                <Image
                  source={iconName}
                  style={{
                    width: 26,
                    height: 26,

                    resizeMode: 'stretch',
                    tintColor: focused ? COLOR.primary : COLOR.grayText,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  marginTop: 4,
                  color: focused ? COLOR.primary : COLOR.grayText,
                }}>
                {label}
              </Text>
            </View>
          );
        },
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: windowHeight * 0.075,
          position: 'absolute',
          backgroundColor: COLOR.background,
        },
      })}
    >
      <Tab.Screen name="StackHome" component={StackHome} />
      <Tab.Screen name="StackHistory" component={StackHistory} />
      <Tab.Screen name="StackProfile" component={StackProfile} />
    </Tab.Navigator>
  )
};

const StackNavigation = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {
        isLogin == true ? <StackBegin /> : <Main />
      }
    </>

  )
}

export default StackNavigation;