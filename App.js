import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, WelcomeScreen} from './screen';
import {Screen} from 'react-native-screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigationMenu = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: ''}}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
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
