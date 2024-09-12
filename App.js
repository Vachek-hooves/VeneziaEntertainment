import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CalendarScreen,
  EventScreen,
  MainScreen,
  MapScreen,
  UserScreen,
  WelcomeScreen,
} from './screen';
import {useEffect, useRef, useState} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import {COLOR} from './contstants/colors';
import IconMap from './components/Icon/IconMap';
import {IconCalendar, IconMain, IconMask} from './components/Icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const images = [
  require('./assets/img/updates/Loader1.png'),
  require('./assets/img/updates/Loader.png'),
];

const TabNavigationMenu = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLOR.gold,
        tabBarInactiveTintColor: COLOR.inActive + 80,
        title: '',
        headerShown: false,
        tabBarStyle: styles.barStyle,
        tabBarItemStyle: styles.barItemStyle,
      })}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{tabBarIcon: ({focused}) => <IconMain focused={focused} />}}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{tabBarIcon: ({focused}) => <IconMap focused={focused} />}}
      />
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({focused}) => <IconCalendar focused={focused} />,
        }}
      />
      <Tab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{tabBarIcon: ({focused}) => <IconMask focused={focused} />}}
      />
    </Tab.Navigator>
  );
};

function App() {
  const [id, setItem] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeStart();
    const timeOut = setTimeout(() => {
      navigateToMenu();
    }, 6000);
    return () => clearTimeout(timeOut);
  }, []);
  const fadeStart = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => fadeFinish());
  };

  const fadeFinish = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setItem(prevState => prevState + 1);
      fadeStart();
    });
  };
  const navigateToMenu = () => {
    setItem(2);
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 1000,
        }}>
        {id < 2 ? (
          <Stack.Screen name="Welcome" options={{headerShown: false}}>
            {() => (
              <View style={{flex: 1}}>
                <Animated.Image
                  source={images[id]}
                  style={[
                    {width: '100%', flex: 1},
                    {opacity: animation},
                  ]}></Animated.Image>
              </View>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="TabNavigationMenu" component={TabNavigationMenu} />
        )}
        {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
        {/* <Stack.Screen name="TabNavigationMenu" component={TabNavigationMenu} /> */}
        <Stack.Screen name="EventScreen" component={EventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  barStyle: {
    borderRadius: 32,
    height: 110,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: 'transparent',
    position: 'absolute',
    alignItems: 'center',
  },
  barItemStyle: {
    flex: 1,
    // backgroundColor: COLOR.white + 10,
    borderRadius: 22,
    margin: 5,
  },
});
