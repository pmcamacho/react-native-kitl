
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.splash}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={styles.splash.backgroundColor}
      />
      <View style={styles.splash}>
        <Text>Loading...</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  splash: {
    display: 'flex',
    flex: 1,
    color: '#0075FF',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0075FF'
  },
});

export default App;
