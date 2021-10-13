import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform, PermissionsAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import Dialog from "react-native-dialog";

import {
    launchCamera,
    launchImageLibrary
} from 'react-native-image-picker';

import { useDispatch, useSelector } from 'react-redux';

const Profile = ({ navigation }) => {
    let getUserState = useSelector(({ userState }) => userState.infoUser);

    const [visible, setVisible] = useState(false);
    const [filePath, setFilePath] = useState({});

    const showDialog = () => {
        setVisible(true);
    };

    const handleCamera = () => {
        setVisible(false);
    };

    const handleGallery = () => {
        setVisible(false);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'high',
            durationLimit: 5, //Video max duration in seconds
            saveToPhotos: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, (response) => {
                setFilePath(response.assets[0].uri);

                if (response.didCancel) {
                    ToastAndroid.show("User cancelled camera picker", ToastAndroid.SHORT);
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    ToastAndroid.show("Camera not available on device", ToastAndroid.SHORT);
                    return;
                } else if (response.errorCode == 'permission') {
                    ToastAndroid.show("Permission not satisfied", ToastAndroid.SHORT);
                    return;
                } else if (response.errorCode == 'others') {
                    ToastAndroid.show(response.errorMessage, ToastAndroid.SHORT);
                    return;
                }
                // console.log('base64 -> ', response.assets[0].fileName);
                // console.log('uri -> ', response.assets[0].uri);
                // console.log('width -> ', response.assets[0].width);
                // console.log('height -> ', response.assets[0].height);
                // console.log('fileSize -> ', response.assets[0].fileSize);
                // console.log('type/format -> ', response.assets[0].type);
                // console.log('fileName -> ', response.assets[0].fileName);

                handleCancel()

            });
        }
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };

        launchImageLibrary(options, (response) => {
            setFilePath(response.assets[0].uri);

            if (response.didCancel) {
                ToastAndroid.show("User cancelled camera picker", ToastAndroid.SHORT);
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                ToastAndroid.show("Camera not available on device", ToastAndroid.SHORT);
                return;
            } else if (response.errorCode == 'permission') {
                ToastAndroid.show("Permission not satisfied", ToastAndroid.SHORT);
                return;
            } else if (response.errorCode == 'others') {
                ToastAndroid.show(response.errorMessage, ToastAndroid.SHORT);
                return;
            }
            // console.log('base64 -> ', response.assets[0].fileName);
            // console.log('uri -> ', response.assets[0].uri);
            // console.log('width -> ', response.assets[0].width);
            // console.log('height -> ', response.assets[0].height);
            // console.log('fileSize -> ', response.assets[0].fileSize);
            // console.log('type/format -> ', response.assets[0].type);
            // console.log('fileName -> ', response.assets[0].fileName);
            
            handleCancel()
        });
    };

    useEffect(() => {
        console.log(filePath);
    });

    return (
        <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%' }} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.toolbar}>
                            <TouchableOpacity onPress={navigation.openDrawer}>
                                <Image style={{ width: 40, height: 30 }} source={require('../../assets/boorger.png')} />
                            </TouchableOpacity>
                            <View style={styles.toolbarEnd}>

                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.caption}>My Profile</Text>

                        <ImageBackground style={styles.catItem} source={require('../../assets/instruction3.png')} >
                            <TouchableOpacity style={styles.catItemImageBorder} onPress={showDialog} >
                                <Image style={styles.catItemImage}
                                    source={{ uri: `${filePath}` }}
                                />
                                <Image style={styles.catItemImageCamera} source={require('../../assets/camera1.png')} />
                                <Dialog.Container visible={visible}>
                                    <Dialog.Title>Choose from</Dialog.Title>
                                    <Dialog.Description>
                                        Select the source of Image
                                    </Dialog.Description>
                                    <Dialog.Button label="Camera" onPress={() => captureImage('photo')} />
                                    <Dialog.Button label="Gallery" onPress={() => chooseFile('photo')} />
                                    <Dialog.Button style={{ color: 'white', backgroundColor: 'red' }} label="Cancel" onPress={handleCancel} />
                                </Dialog.Container>
                            </TouchableOpacity>

                            <View style={{ width: '80%' }}>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '85%', marginEnd: '5%' }}>
                                        <Text style={styles.profileRowText}>{getUserState.details.username}</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/profile1_1.png')} />
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '85%', marginEnd: '5%' }}>
                                        <Text style={styles.profileRowText}>{getUserState.details.fname} {getUserState.details.lname}</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Icon style={styles.icon} name="user" size={20} color="#1393e7" />
                                        {/* <Image style={styles.profileRowImage} source={require('../../assets/profile1_2.png')} /> */}
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '85%', marginEnd: '5%' }}>
                                        <Text style={styles.profileRowText}>{getUserState.details.email}</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Icon style={styles.icon} name="mail-bulk" size={20} color="#1393e7" />
                                        {/* <Image style={styles.profileRowImage} source={require('../../assets/profile1_2.png')} /> */}
                                    </View>
                                </View>

                                <View style={[styles.profileRow]}>
                                    <View style={{ width: '85%', marginEnd: '5%' }}>
                                        <Text style={styles.profileRowText}>{getUserState.details.created_at}</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/profile1_3.png')} />
                                    </View>
                                </View>

                            </View>
                        </ImageBackground>

                        {/* <TouchableOpacity style={styles.btnNextContainer}>
                            <ImageBackground
                                source={require('../../assets/instruction2.png')}
                                style={styles.btnNextBackground} />
                            <View
                                style={styles.btnNextTextContainer}>
                                <Text style={styles.btnNextText}>DONE</Text>
                            </View>
                        </TouchableOpacity> */}

                    </View>
                </View>

            </ScrollView>
        </LinearGradient>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    headerContainer: {
        // width: '100%',
    },
    toolbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toolbarEnd: {
        flexDirection: 'row',
    },
    body: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    caption: {
        fontSize: 26,
        color: '#fff',
        includeFontPadding: false,
        fontFamily: 'Slackey-Regular',
    },
    catItem: {
        width: '100%',
        height: 420,
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        marginVertical: 60
    },
    catItemImageBorder: {
        width: 95,
        height: 95,
        position: 'absolute',
        top: -30,
        backgroundColor: '#0c33dc',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    catItemImage: {
        width: 90,
        height: 90,
        position: 'absolute',
        borderRadius: 40,
        resizeMode: 'contain'
    },
    catItemImageCamera: {
        position: 'absolute',
        bottom: '5%',
        right: '-5%',
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    catItemText: {
        color: "#fff",
        fontFamily: "Slackey-Regular",
        marginVertical: 60,
        fontSize: 18,
        textAlign: 'center'
    },
    btnNextContainer: {
        height: 60,
        width: 150,
        position: 'relative'
    },
    btnNextBackground: {
        height: 60,
        width: 150,
        opacity: 1,
        position: 'absolute'
    },
    btnNextTextContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnNextText: {
        color: '#fff',
        fontFamily: "Slackey-Regular",
        fontSize: 18,
    },
    profileRow: {
        width: '100%',
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileRowText: {
        textAlign: 'left',
        color: '#1393e7',
        fontFamily: 'Slackey-Regular'
    },
    profileRowImage: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    }

});

export default Profile;

