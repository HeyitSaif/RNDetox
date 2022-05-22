import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Home from './Components/Home';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';

const linking = {
  prefixes: ['page://'],
};

function DefaultStack() {
  return (
    <NavigationContainer linking={linking}>
      <Home />
    </NavigationContainer>
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <DefaultStack />
    </SafeAreaView>
  );
};

export default App;
