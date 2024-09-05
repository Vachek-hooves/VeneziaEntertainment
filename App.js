import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, MapScreen, WelcomeScreen} from './screen';
import {StyleSheet} from 'react-native';
import {COLOR} from './contstants/colors';
import IconMap from './components/Icon/IconMap';
import {IconMain} from './components/Icon';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
    </Tab.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 1000,
        }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="TabNavigationMenu" component={TabNavigationMenu} />
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
