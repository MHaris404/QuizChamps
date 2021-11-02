import React, { useEffect, useState } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, TouchableOpacity, ToastAndroid, Modal, Pressable } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { IP } from '../redux/actions/types'

import {
  FormControl,
  Input,
  NativeBaseProvider,
  Button
} from 'native-base';
import { backgroundColor } from 'styled-system';

const SignupScreen = ({ navigation }) => {

  const [state, setState] = useState({
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [btnState, setBtnState] = useState({
    fnameValid: false,
    lnameValid: false,
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
    confirmpasswordValid: false
  });

  const [show, setShow] = useState(false)
  const hideShow = () => setShow(!show)
  const [showConfirm, setShowConfirm] = useState(false)
  const hideShowConfirm = () => setShowConfirm(!showConfirm)

  const [btnEnable, setBtnEnable] = useState(false)
  const enableDisable = () => setBtnEnable(!btnEnable)

  const [modalVisible, setModalVisible] = useState(false);
  const closeDialog = () => {
    setModalVisible(false)
  }

  let regName = /^[a-zA-Z]+$/; //fnam,lname
  let regUsername = /^[a-zA-Z]+[a-zA-Z0-9._-]*$/; //username

  useEffect(() => {
    validateFname()
  }, [state.fname]);

  useEffect(() => {
    validateLname()
  }, [state.lname]);

  useEffect(() => {
    validateUsername()
  }, [state.username]);

  useEffect(() => {
    validateEmail()
  }, [state.email]);

  useEffect(() => {
    validatePassword()
  }, [state.password]);

  useEffect(() => {
    validateConfirmPassword()
  }, [state.confirmPassword]);

  const validateFname = () => {
    if (state.fname == '') {
      setBtnEnable(false)
    }
    else if (state.fname === undefined) {
      setErrors({
        ...errors,
        fname: 'First Name is required',
      });
      setBtnEnable(false)
    } else if (state.fname.length < 3) {
      setErrors({
        ...errors,
        fname: 'First Name is too short',
      });
      setBtnEnable(false)
    } else if (regName.test(state.fname) === false) {
      setErrors({
        ...errors,
        fname: 'FirstName can only contain letters',
      });
      setBtnEnable(false)
    } else {
      setErrors({
        ...errors,
        fname: ''
      });
      setBtnState({
        ...btnState,
        fnameValid: true
      })
      btnSignup()
    }
  };

  const validateLname = () => {
    if (state.lname == '') {
      setBtnEnable(false)
    }
    else if (state.lname === undefined) {
      setErrors({
        ...errors,
        lname: 'Last Name is required',
      });
      setBtnEnable(false)
    } else if (state.lname.length < 3) {
      setErrors({
        ...errors,
        lname: 'Last Name is too short',
      });
      setBtnEnable(false)
    } else if (regName.test(state.lname) === false) {
      setErrors({
        ...errors,
        lname: 'LastName can only contain letters',
      });
      setBtnEnable(false)
    } else {
      setErrors({
        ...errors,
        lname: false
      });
      setBtnState({
        ...btnState,
        lnameValid: true
      })
      btnSignup()
    }
  };

  const validateUsername = () => {
    if (state.username == '') {
      setBtnEnable(false)
    }
    else if (state.username === undefined) {
      setErrors({
        ...errors,
        username: 'User Name is required',
      });
      setBtnEnable(false)
    } else if (state.username.length < 3) {
      setErrors({
        ...errors,
        username: 'User Name is too short',
      });
      setBtnEnable(false)
    } else if (regUsername.test(state.username) === false) {
      setErrors({
        ...errors,
        username: 'Username pattern \n a-z A-Z \n a-z A-Z 0-9 . _ - ',
      });
      setBtnEnable(false)
    } else {
      setErrors({
        ...errors,
        username: false
      });
      setBtnState({
        ...btnState,
        usernameValid: true
      })
      btnSignup()
    }
  };

  const validateEmail = () => {
    let reg = /^[a-zA-Z]+[a-zA-Z0-9._-]*@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/;
    if (state.email == '') {
      setBtnEnable(false)
    }
    else if (reg.test(state.email) === false) {
      setErrors({
        ...errors,
        email: 'Email pattern \n a-z A-Z \n a-z A-Z 0-9 . _ - \n @ \n a-z A-Z 0-9 . _ - \n .  \n a-z A-Z',
      });
      setBtnEnable(false)
    }
    else {
      setErrors({
        ...errors,
        email: false
      });
      setBtnState({
        ...btnState,
        emailValid: true
      })
      btnSignup()
    }
  }

  const validatePassword = () => {
    if (state.password == '') {
      setBtnEnable(false)
    }
    else if (state.password === undefined) {
      setErrors({
        ...errors,
        password: 'Password is required',
      });
      setBtnEnable(false)
    } else if (state.password.length < 8) {
      setErrors({
        ...errors,
        password: 'Password must be of 8 characters atleast',
      });
      setBtnEnable(false)
    } else if (state.password.search(/[a-z]/i) < 0) {
      setErrors({
        ...errors,
        password: 'Password must contain at least one letter',
      });
      setBtnEnable(false)
    } else if (state.password.search(/[0-9]/) < 0) {
      setErrors({
        ...errors,
        password: 'Password must contain at least one digit',
      });
      setBtnEnable(false)
    } else {
      setErrors({
        ...errors,
        password: false
      });
      setBtnState({
        ...btnState,
        passwordValid: true
      })
      btnSignup()
    }
  };

  const validateConfirmPassword = () => {
    if (state.confirmPassword == '') {
      setBtnEnable(false)
    }
    else if (state.confirmPassword === undefined) {
      setErrors({
        ...errors,
        confirmPassword: 'Confirm Password is also required',
      });
      setBtnEnable(false)
    } else if (state.confirmPassword.length < 8) {
      setErrors({
        ...errors,
        confirmPassword: 'Confirm Password must be of 8 characters atleast',
      });
      setBtnEnable(false)
    } else if (state.confirmPassword.search(/[a-z]/i) < 0) {
      setErrors({
        ...errors,
        confirmPassword: 'Confirm Password must contain at least one letter',
      });
      setBtnEnable(false)
    } else if (state.confirmPassword.search(/[0-9]/) < 0) {
      setErrors({
        ...errors,
        confirmPassword: 'Confirm Password must contain at least one digit',
      });
      setBtnEnable(false)
    } else if (state.confirmPassword !== state.password) {
      setErrors({
        ...errors,
        confirmPassword: 'Password does not match',
      });
      setBtnEnable(false)
    } else {
      setErrors({
        ...errors,
        confirmPassword: false
      });
      setBtnState({
        ...btnState,
        confirmpasswordValid: true
      })
      setBtnEnable(true)
      btnSignup()
    }
  };

  const btnSignup = () => {
    if (btnState.fnameValid && btnState.lnameValid && btnState.usernameValid && btnState.emailValid && btnState.passwordValid && btnState.confirmpasswordValid) {
      setBtnEnable(true)
    } else {
      setBtnEnable(false)
    }
  }

  async function getAPI() {

    setModalVisible(!modalVisible)
    let api = `http://${IP}:5000/endpoint/v1/signup`;
    try {
      fetch(api, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fname: state.fname,
          lname: state.lname,
          username: state.username,
          email: state.email,
          password: state.password
        })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status) {
            setTimeout(() => {
              closeDialog()
              navigation.navigate('Login');
            }, 500);
          } else {
            closeDialog()
            ToastAndroid.show(responseJson.message, ToastAndroid.LONG);
          }
        })
        .catch((error) => { console.error("What went wrong : " + error); });

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <NativeBaseProvider>
      <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ paddingHorizontal: 30 }} >
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>

              <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                <Image style={styles.logo} source={require('../assets/logo.png')} />
              </View>

              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.h1}>Signup</Text>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'fname' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>First Name</FormControl.Label>
                  <Input
                    variant="underlined"
                    placeholder="John"
                    onChangeText={(value) => setState({ ...state, fname: value })}
                    InputLeftElement={<Icon style={styles.icon} name="user" size={20} color="#fff" />}
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {errors.fname
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.fname}.</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>
                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'lname' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>Last Name</FormControl.Label>
                  <Input
                    variant="underlined"
                    placeholder="Wayne"
                    onChangeText={(value) => setState({ ...state, lname: value })}
                    InputLeftElement={<Icon style={styles.icon} name="user" size={20} color="#fff" />}
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {errors.lname
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.lname}</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>
                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'username' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>Username</FormControl.Label>
                  <Input
                    variant="underlined"
                    placeholder="john123"
                    onChangeText={(value) => setState({ ...state, username: value })}
                    InputLeftElement={<Icon style={styles.icon} name="user" size={20} color="#fff" />}
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {'username' in errors
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.username}</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>

                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'email' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>Email</FormControl.Label>
                  <Input
                    variant="underlined"
                    placeholder="john@example.com"
                    onChangeText={(value) => setState({ ...state, email: value })}
                    InputLeftElement={<Icon style={styles.icon} name="mail-bulk" size={20} color="#fff" />}
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {'email' in errors
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.email}</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>

                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'password' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>Password</FormControl.Label>
                  <Input
                    type={show ? "text" : "password"}
                    variant="underlined"
                    placeholder="Abc12x"
                    onChangeText={(value) => setState({ ...state, password: value })}
                    InputLeftElement={<Icon style={styles.icon} name="lock" size={20} color="#fff" />}
                    InputRightElement={
                      <Button ml={0} roundedLeft={0} style={{ backgroundColor: 'transparent' }} roundedRight={0} onPress={hideShow}>
                        {show
                          ? <Icon style={styles.icon} name="eye-slash" size={20} color="#fff" />
                          :
                          <Icon style={styles.icon} name="eye" size={20} color="#fff" />
                        }
                      </Button>
                    }
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {errors.password
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.password}</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>
                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.section}>
                <FormControl isRequired isFullWidth='true' isInvalid={'confirmPassword' in errors}>
                  <FormControl.Label _text={{ bold: true, color: '#fff' }}>Confirm Password</FormControl.Label>
                  <Input
                    type={showConfirm ? "text" : "password"}
                    variant="underlined"
                    placeholder="Abc12x"
                    onChangeText={(value) => setState({ ...state, confirmPassword: value })}
                    InputLeftElement={<Icon style={styles.icon} name="lock" size={20} color="#fff" />}
                    InputRightElement={
                      <Button ml={0} roundedLeft={0} style={{ backgroundColor: 'transparent' }} roundedRight={0} onPress={hideShowConfirm}>
                        {showConfirm
                          ? <Icon style={styles.icon} name="eye-slash" size={20} color="#fff" />
                          :
                          <Icon style={styles.icon} name="eye" size={20} color="#fff" />
                        }
                      </Button>
                    }
                    _light={{
                      color: '#fec13c',
                      placeholderTextColor: "#fec13c",
                    }}
                    _dark={{
                      color: '#fec13c',
                      placeholderTextColor: "blueGray.50",
                    }}
                  />
                  {errors.confirmPassword
                    ?
                    <FormControl.ErrorMessage _text={{ fontSize: 'xs', color: 'error.500', fontWeight: 500, marginBottom: 1, marginLeft: 1 }}>{errors.confirmPassword}</FormControl.ErrorMessage>
                    :
                    <FormControl.HelperText _text={{ fontSize: 'xs', color: 'info.500' }}>
                    </FormControl.HelperText>
                  }
                </FormControl>
              </View>

              <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                      <Pressable >
                        <Button variant="outline" isLoading isLoadingText="Loading Please wait" />
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <TouchableOpacity
                  disabled={btnEnable ? false : true}
                  style={{ alignItems: 'center', backgroundColor: `${btnEnable ? '#189bd2' : '#93b9c9'}`, width: '100%', padding: 10, elevation: 1, shadowColor: 'white' }}
                  onPress={() => getAPI()}>
                  <Text style={{ color: 'white', fontFamily: 'Slackey-Regular' }}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', padding: 10, flexDirection: 'row' }}>
                <Text style={styles.link}>Already have a account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{ alignItems: 'center' }}>
                  <View  >
                    <Text style={{ color: '#fff', marginLeft: 10, textDecorationLine: 'underline' }} >SignIn</Text>
                  </View>
                </TouchableOpacity>
              </View>

            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </NativeBaseProvider >
  );

}

const styles = StyleSheet.create({
  input: {
    color: '#fec13c',
    paddingLeft: 0,
    flex: 1,
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
    marginBottom: 10
  },
  icon: {
    padding: 10,
  },
  centeredView: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 0,
    padding: 15,
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    // borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  }
})

export default SignupScreen;