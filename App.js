import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';
import FiltersNavigator from './navigation/FiltersNavigator';
import {Provider} from 'react-redux';
import {store} from './redux/store';

enableScreens();

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={fontsLoaded}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <FiltersNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
