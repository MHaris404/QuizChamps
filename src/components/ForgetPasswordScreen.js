import React, { useEffect, useState } from 'react';
import { Button, View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ForgetPasswordScreen = ({ navigation }) => {
  const [state, setState] = useState({
    email: '',
  });

  return (
    <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%', width: '100%' }}>

      <View style={{ paddingHorizontal: 30 }} >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>

            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
              <Image style={styles.logo} source={require('../assets/logo.png')} />
            </View>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={styles.h1}>Forget Password</Text>
            </View>

            <Text style={styles.h2}>Email</Text>
            <View style={styles.section}>
              <Icon style={styles.icon} name="mail-bulk" size={20} color="#fff" />
              <TextInput
                style={styles.input}
                onChangeText={(text) => setState({ ...state, email: text })}
                name='email'
                value={state.email}
                placeholder='Enter email'
                keyboardType="email-address"
                autoFocus={true}
                placeholderTextColor='#fec13c'
              />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{ alignItems: 'center', backgroundColor: '#189bd2', padding: 10, borderRadius: 10 }}>
              <Text style={{ color: 'white', fontFamily: 'Slackey-Regular', }}>Send Email</Text>
            </TouchableOpacity>

            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginVertical: 10 }}>
              <Text style={styles.link}>Remember Password?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={{ alignItems: 'center' }}>
                <View  >
                  <Text style={{ color: '#fff', marginLeft: 10, textDecorationLine: 'underline' }} >Try Again</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#fec13c',
    paddingLeft: 0,
    flex: 1
  },
  link: {
    color: '#fec13c',
    textAlign: 'center',
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Slackey-Regular',
    color: '#FFF',
    marginBottom: 20
  },
  h2: {
    fontSize: 16,
    color: '#fff'
  },
  logo: {
    width: 400,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
  btnLogin: {
    backgroundColor: '#189bd2'
  },
  section: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#fec13c',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  icon: {
    padding: 10,
  },
})


export default ForgetPasswordScreen;