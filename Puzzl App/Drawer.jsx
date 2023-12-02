import React from 'react';


import { Linking } from 'react-native'



// This is the code for the drawer component
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Screen1 from './About'


const DrawerContent = (props) => {
  // This is the state for the secondary dropdown list
  const [showDropdown, setShowDropdown] = useState(false);

  // This is the function to toggle the dropdown list
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerSection}>
          <DrawerItem
            label="About"
            onPress={() => {
              props.navigation.navigate(Screen1);
            }}
          />
          <DrawerItem
            label="Report"
            onPress={() => {
              props.navigation.navigate();
            }}
          />
          <DrawerItem
            label="Apps"
            onPress={toggleDropdown}
          />
          {showDropdown && (
            <View style={styles.dropdownSection}>
              <DrawerItem
                label="Sub-option 1"
                onPress={() => {
                  props.navigation.navigate(Screen2);
                }}
              />
              <DrawerItem
                label="Sub-option 2"
                onPress={() => {
                  props.navigation.navigate("Screen4");
                }}
              />
              <DrawerItem
                label="Sub-option 3"
                onPress={() => {
                  props.navigation.navigate("Screen5");
                }}
              />
            </View>
          )}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerSection: {
    marginTop: 15,
  },
  dropdownSection: {
    marginLeft: 20,
  },
});

export default DrawerContent;

