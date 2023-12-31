import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Navbar from './Navbar';

class AppPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>About Us</Text>
        <Text style={styles.text}>
          {/* Add your text content here */}
        </Text>
        <Text style={styles.heading}>Meet our developers</Text>
        <View style={styles.developers}>
          <View style={styles.developer}>
            <Image source={{ uri: './agastya.jpg' }} {/* Add the image URLs @HKS */} style={styles.image}/>
            <Text style={styles.name}>Agastya - Lead Developer</Text>
          </View>
          <View style={styles.developer}>
            <Image source={{ uri: './harr_kabir.jpg' }} {/* Add the image URLs @HKS */} style={styles.image}/>
            <Text style={styles.name}>Harr Kabir - App developer</Text>
          </View>
          <View style={styles.developer}>
            <Image source={{ uri: './anahita.jpg' }} {/* Add the image URLs @HKS */} style={styles.image}/>
            <Text style={styles.name}>Anahita - Art/UI</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  developers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  developer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default AppPage;
