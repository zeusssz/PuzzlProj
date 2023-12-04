import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import Screen1 from './About';
import Screen2 from './Screen2'; // Import other screens as needed

const DrawerContent = (props) => {
  const navigation = useNavigation(); // Access navigation using useNavigation hook
  const [showDropdown, setShowDropdown] = useState(false);

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
              navigation.navigate('About'); // Navigate to 'About' screen
            }}
          />
          <DrawerItem
            label="Report"
            onPress={() => {
              // Navigate to 'Report' screen or specify the screen name accordingly
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
                  navigation.navigate('Screen2'); // Navigate to 'Screen2'
                }}
              />
              {/* Add similar navigation logic for other sub-options cuz its your job dumbass */}
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
