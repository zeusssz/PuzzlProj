import React from 'react';
import {Text, View,StyleSheet, Image, Scrollview} from 'react-native';
import Navbar from './Navbar';
class AppPage extends React.Component {
    class AppPage extends React.Component {
        render() {
          return (
            <View style={styles.container}>
              <Text style={styles.heading}></Text>
              <Text style={styles.text}>
              
              </Text>
              <Text style={styles.heading}>Meet our developers</Text>
              <View style={styles.developers}>
                <View style={styles.developer}>
                  <Image
                    source={{ uri: '' }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>Agastya - Lead Developer</Text>
                </View>
                <View style={styles.developer}>
                  <Image
                    source={{ uri: '' }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>Harr Kabir - App developer</Text>
                </View>
                <View style={styles.developer}>
                  <Image
                    source={{ uri: '' }}
                    style={styles.image}
                  />
                  <Text style={styles.name}>Anahita - Art/Ui</Text>
                </View>
              </View>
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#000000',
          padding: 20,
        },
        heading: {
          fontSize: 24,
          fontWeight: 'bold',
          color: '#FFFFFF',
          marginBottom: 10,
        },
        text: {
          fontSize: 18,
          color: '#000000',
          marginBottom: 10,
        },
        developers: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        developer: {
          width: 100,
          height: 100,
          borderRadius: 50,
          overflow: 'hidden',
        },
        image: {
          width: 100,
          height: 100,
        },
        name: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#000000',
          textAlign: 'center',
        },
      });
    
export default About;
