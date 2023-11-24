import React from 'react';
import {Text, View,StyleSheet, Image, TouchableOpacity, SafeAreaView, ImageBackground, Linking} from 'react-native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { Linking } from 'react-native'
import About from './About';
import Apps from './Weather';

const Drawer = createDrawerNavigator();

const MyComponent = () => {
  const handleOptionPress = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          headerLeft: false,
          headerRight: () => <DrawerToggleButton color="white" />,
          drawerStyle: {
            backgroundColor: 'black',
          },
          drawerLabelStyle: {
            color: 'white',
          },
        }}
      >
        <Drawer.Screen name="About" component={About} />
         <Drawer.Screen
          name="Report"
          component={Option3}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              handleOptionPress('https://mail.google.com/')
              <Drawer.Screen name="Apps" component={Apps} />
           
            },
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
 export default Drawer;