import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Drawer from './Drawer';
import Navbar from './Navbar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./pattern.gif')} style={styles.background1}>
        <ImageBackground source={require('./Box.png')} style={styles.background2} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background1: {
    flex: 1,
  },
  background2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
  },
});

export default HomeScreen;
