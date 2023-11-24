import React from 'react';
import MyComponent from
'./Drawer'
import About from
'./About'
const Navbar = () => {
    return (
      <View style={styles.container}>
        <i class="fa-solid fa-bars" style="color: #ffffff;"></i>
        <Image
          style={styles.logo}
          source={require('./img/logo.png')} />
        <View style={styles.icon} />
      </View>
    );
 }

 const styles =  {

  container: {
    flexDirection: 'row',
      alignItems: 'center',
        justifyContent: 'space-between',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
            height: 60,
              paddingHorizontal: 20,
}
icon: {
    width: 32,
      height; 32
        ;
  }
  logo: {
    position: 'absolute',
      top; 0,
        left; 0,
          width; 32,
            height; 32,
              resizeMode; 'contain',
        ;
  }
};
export default Navbar
