import React, { useEffect } from 'react';
import { Image, StyleSheet, ToastAndroid } from 'react-native';
import { Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

let deviceWidth = Dimensions.get('window').width
let deviceHeight = Dimensions.get('window').height

const SplashScreen = ({ navigation }) => {

  // useEffect(() => {
  setTimeout(() => {
    navigation.navigate("Login")
  }, 2000)
  // }, []);

  return (
    <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Image style={styles.splashImage} source={require('../assets/splash.png')} />
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  splashImage: {
    width: deviceWidth,
    height: 500,
    resizeMode: "cover",
  }
})

export default SplashScreen;