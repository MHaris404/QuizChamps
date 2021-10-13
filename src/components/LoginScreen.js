import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, Modal, StyleSheet, ToastAndroid, TouchableOpacity, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {
    FormControl,
    Input,
    NativeBaseProvider,
    Button
} from 'native-base';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../redux/actions/userAction';

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({}); //donot remove me
    const [show, setShow] = useState(false)
    const hideShow = () => setShow(!show)

    const [btnEnable, setBtnEnable] = useState(false)

    const [modalVisible, setModalVisible] = useState(false);
    const closeDialog = () => { setModalVisible(false) }

    useEffect(() => {
        btnLogin()
    }, [state.email]);

    useEffect(() => {
        btnLogin()
    }, [state.password]);

    const btnLogin = () => {
        if (state.email.length >= 1 && state.password.length >= 1) {
            setBtnEnable(true)
        } else {
            setBtnEnable(false)
        }
    }
   
    function getAPI() {
        // setModalVisible(!modalVisible)
        dispatch(LoginUser(state))
    }

    return (
        <NativeBaseProvider>
            <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%', width: '100%' }}>

                <View style={{ paddingHorizontal: 30 }} >
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View>

                            <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 10 }}>
                                <Image style={styles.logo} source={require('../assets/logo.png')} />
                            </View>

                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.h1}>Login</Text>
                            </View>

                            <View style={styles.section}>
                                <FormControl isRequired isFullWidth='true' >
                                    <FormControl.Label _text={{ bold: true, color: '#fff' }}>Email/ Username</FormControl.Label>
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

                                </FormControl>
                            </View>

                            <View style={styles.section}>
                                <FormControl isRequired isFullWidth='true'>
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

                            <View style={{ marginVertical: 15 }}>
                                <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
                                    <Text style={{ color: '#fec13c', textAlign: 'right' }}>forgot Password?</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={styles.link}>Don't have an account?</Text>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate('Signup')}
                                    style={{ alignItems: 'center' }}>
                                    <View  >
                                        <Text style={{ color: '#fff', marginLeft: 10, textDecorationLine: 'underline' }} >Signup</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </NativeBaseProvider>
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
    buttonOpen: {
        // backgroundColor: "#F194FF",
    },
    buttonClose: {
        // backgroundColor: "#2196F3",
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

export default LoginScreen;