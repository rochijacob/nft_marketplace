import { Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Details from './screens/Details';
import { useState } from 'react';
import {useFonts} from 'expo-font'


const {Navigator, Screen} = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
}

const App = () => {
  const [loaded] = useFonts({
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    InterRegular: require('./assets/fonts/Inter-Regular.ttf'),
    InterMedium: require('./assets/fonts/Inter-Medium.ttf'),
    InterSemiBold: require('./assets/fonts/Inter-SemiBold.ttf'),
    InterLight: require('./assets/fonts/Inter-Light.ttf'),
  })

  if (!loaded) return null

  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}} initialRouteName='Home'>
        <Screen name="Home" component={Home}/>
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App

