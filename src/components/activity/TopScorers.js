import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform, PermissionsAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { funcGETScorers123, funcGETScorers4567 } from '../../redux/actions/gameAction';

import Loader from '../Loader';

const TopScorers = ({ navigation }) => {

    const dispatch = useDispatch();
    let getUserState, authToken, topScores123Info, topScores4567Info;

    getUserState = useSelector(({ userState }) => userState.infoUser);
    authToken = getUserState.token;
    topScores123Info = useSelector(({ scoreState }) => { return scoreState.infoTopScores123 });
    topScores4567Info = useSelector(({ scoreState }) => { return scoreState.infoTopScores4567 });

    useEffect(() => {

        dispatch(funcGETScorers123(authToken))
        dispatch(funcGETScorers4567(authToken))

    }, [])

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
                        <Text style={styles.caption}>Top Scorers</Text>

                        <ImageBackground style={styles.catItem} source={require('../../assets/instruction3.png')} >

                            <View style={{ width: '100%', flexDirection: 'row', marginBottom: 40, justifyContent: 'center' }}>

                                {
                                    (topScores123Info)
                                        ?
                                        (
                                            topScores123Info.map((item, index) => {
                                                return (

                                                    <TouchableOpacity style={styles.catItemImageBorder} key={++index}>
                                                        <Image style={styles.catItemImage}
                                                            source={require('../../assets/user1_2.png')}
                                                        />
                                                        <ImageBackground style={styles.profilePositionHolder} source={require('../../assets/optionBgIndex.png')} >
                                                            <Text style={styles.profilePositionHolderPosition}>{index}</Text>
                                                        </ImageBackground>

                                                        <ImageBackground style={styles.profilePositionHolderDetails} source={require('../../assets/catBg0.png')} >
                                                            <Text style={styles.profilePositionHolderPositionScore}>{item.score}</Text>
                                                            <Text style={styles.profilePositionHolderPositionName}>{item.name}</Text>
                                                            <Image style={styles.profilePositionHolderPositionMedal}
                                                                source={require('../../assets/medalGold.png')}
                                                            />
                                                        </ImageBackground>

                                                    </TouchableOpacity>

                                                );
                                            })
                                        )
                                        :
                                        <Loader loading={true} />
                                }

                            </View>

                            <View style={{ width: '80%' }}>

                                {
                                    (topScores4567Info)
                                        ?
                                        (
                                            topScores4567Info.map((item, index) => {
                                                return (

                                                    <View style={styles.profileRow} key={index}>
                                                        <View style={{ width: '15%' }}>
                                                            <Text style={styles.profileRowPosition}>{index + 4}</Text>
                                                        </View>
                                                        <View style={{ width: '15%' }}>
                                                            <Image style={styles.profileRowImage} source={require('../../assets/user2.png')} />
                                                        </View>
                                                        <View style={{ width: '50%' }}>
                                                            <Text style={styles.profileRowName}>{item.name}</Text>
                                                        </View>
                                                        <View style={{ width: '20%' }}>
                                                            <Text style={styles.profileRowScore}>{item.score}</Text>
                                                        </View>
                                                    </View>

                                                );
                                            })
                                        )
                                        :
                                        <Loader loading={true} />
                                }


                            </View>

                        </ImageBackground>

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
        height: 'auto',
        minHeight: 440,
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        marginVertical: 60,
        // paddingTop: 140,
        paddingBottom: 40
    },
    catItemImageBorder: {
        width: 95,
        height: 95,
        // position: 'absolute',
        top: -30,
        backgroundColor: '#0c33dc',
        borderRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginHorizontal: 10
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
        padding: 5,
        position: 'absolute',
        bottom: -20
    },
    profilePositionHolderPositionScore: {
        fontSize: 8,
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Slackey-Regular'
    },
    profilePositionHolderPositionName: {
        fontSize: 8,
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
    profileRowName: {
        textAlign: 'left',
        color: '#1393e7',
        fontFamily: 'Slackey-Regular'
    },
    profileRowImage: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    profileRowPosition: {
        textAlign: 'center',
        color: '#1393e7',
        fontFamily: 'Slackey-Regular'
    },
    profileRowScore: {
        textAlign: 'center',
        color: '#ff5200',
        fontFamily: 'Slackey-Regular'
    }

});

export default TopScorers;

