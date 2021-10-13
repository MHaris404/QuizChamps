import React, { useEffect } from 'react';
import { Dimensions, ScrollView } from 'react-native';
import { Button, SafeAreaView, ImageBackground, View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreenDashboard from './HomeScreenDashboard/HomeScreenDashboard'
import Instructions from './activity/Instructions'
import Question from './activity/Question'
import Profile from './activity/Profile'
import TopScorers from './activity/TopScorers'
import Achievements from './activity/Achievements'
import { LogoutUser } from '../redux/actions/userAction';

import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  let getUserState = useSelector(({ userState }) => userState.infoUser);

  const { width, height } = Dimensions.get('window');
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  function getAPI() {
    dispatch(LogoutUser())
    // navigation.navigate("Login")
  }

  function DrawerUI(props) {
    return (
      <View >

        <ImageBackground style={{ width: '100%', height: height }} source={require('../assets/drawerBg.png')}>

          <View style={styles.navigationContainer}>

            <View style={styles.backContainer}>
              <TouchableOpacity style={{ width: '100%', justifyContent: "flex-end", alignItems: 'flex-end' }} onPress={props.navigation.closeDrawer}>
                <Image style={styles.closeButton} source={require('../assets/backArrow.png')} />
              </TouchableOpacity>
            </View>

            <View style={styles.mainHeader}>
              <View style={{ width: '100%', flexDirection: 'row', marginBottom: 40, justifyContent: 'flex-start' }}>

                <TouchableOpacity style={styles.catItemImageBorder} >
                  <Image style={styles.catItemImage}
                    source={require('../assets/user1_1.png')}
                  />

                  <ImageBackground style={styles.profilePositionHolderDetails} source={require('../assets/catBg0.png')} >
                    <Text style={styles.profilePositionHolderPositionName}>{getUserState.details.username}</Text>

                  </ImageBackground>

                </TouchableOpacity>

              </View>

            </View>

            <ScrollView showsVerticalScrollIndicator={false}>

              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
                <View style={styles.item}>
                  <View style={{ flex: 0.2 }}>
                    <Icon size={26} name="home" color="#1d6eff" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text style={styles.title}>Home</Text>
                  </View>
                </View>
              </TouchableOpacity >

              <TouchableOpacity onPress={() => navigation.navigate('TopScorers')}>
                <View style={styles.item}>
                  <View style={{ flex: 0.2 }}>
                    <Icon size={26} name="medal" color="#1d6eff" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text style={styles.title}>Top Scorers</Text>
                  </View>
                </View>
              </TouchableOpacity >

              <TouchableOpacity onPress={() => navigation.navigate('Achievements')}>
                <View style={styles.item}>
                  <View style={{ flex: 0.2 }}>
                    <Icon size={26} name="trophy" color="#1d6eff" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text style={styles.title}>Achievements</Text>
                  </View>
                </View>
              </TouchableOpacity >

              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <View style={styles.item}>
                  <View style={{ flex: 0.2 }}>
                    <Icon size={26} name="user-tie" color="#1d6eff" />
                  </View>
                  <View style={{ flex: 0.8 }}>
                    <Text style={styles.title}>My Profile</Text>
                  </View>
                </View>
              </TouchableOpacity >

            </ScrollView>

            <TouchableOpacity onPress={() => getAPI()} >
              <View style={styles.itemLogout}>
                <Icon name="sign-out-alt" size={20} color="#1d6eff" />
                <Text style={styles.titleLogout}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>

        </ImageBackground >

      </View>
    );
  }

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerUI {...props} />} initialRouteName="Dashboard" >
      <Drawer.Screen name="Dashboard" component={HomeScreenDashboard} />
      <Stack.Screen name="Instructions" component={Instructions} />
      <Drawer.Screen name="Question" component={Question} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="TopScorers" component={TopScorers} />
      <Drawer.Screen name="Achievements" component={Achievements} />
    </Drawer.Navigator >
  );
}

const styles = StyleSheet.create({
  container: {
  },
  navigationContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 12,
  },
  headerText_main: {
    fontSize: 28,
    alignSelf: "flex-start",
    color: 'rgb(92,102,167)'
  },
  catItemImageBorder: {
    width: 95,
    height: 95,
    backgroundColor: '#0c33dc',
    borderRadius: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  catItemImage: {
    width: 90,
    height: 90,
    position: 'absolute',
    borderRadius: 40,
    resizeMode: 'contain'
  },
  profilePositionHolder: {
    position: 'absolute',
    top: '5%',
    left: '-5%',
    width: 25,
    height: 20,
    resizeMode: "contain",
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePositionHolderPosition: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Slackey-Regular'
  },
  profilePositionHolderDetails: {
    width: 73,
    height: 36,
    resizeMode: "cover",
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    position: 'absolute',
    bottom: -20
  },
  profilePositionHolderPositionName: {
    fontSize: 12,
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Slackey-Regular'
  },
  profilePositionHolderPositionMedal: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'absolute',
    bottom: -25,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolbar: {
    width: '100%',
  },
  toolbarEnd: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 24,
    height: 24,
    marginStart: 10
  },
  backContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  closeButton: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  mainHeader: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  headerImageDrawer: {
    width: 90,
    height: 90,
    marginEnd: 20
  },
  toolbarContainer: {
    marginTop: 20,
  },
  caption: {
    fontSize: 26,
    color: '#fff',
    includeFontPadding: false,
    fontFamily: 'Slackey-Regular',
  },
  captionBold: {
    fontSize: 35,
    color: '#fff',
    fontFamily: 'Slackey-Regular',
    includeFontPadding: false,
    marginBottom: 30
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 15,
  },
  title: {
    fontSize: 26,
    color: "#fff",
    fontFamily: 'Slackey-Regular'
  },
  itemLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },
  titleLogout: {
    fontSize: 26,
    marginStart: 16,
    color: "#1d6eff",
    fontFamily: 'Slackey-Regular',
  },
});

export default HomeScreen;