import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform, PermissionsAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { funcGETScorebyUserid } from '../../redux/actions/gameAction';

const Achievements = ({ navigation }) => {

    const dispatch = useDispatch()
    let getUserState = useSelector(({ userState }) => userState.infoUser);
    useEffect(() => {
        dispatch(funcGETScorebyUserid(getUserState.token, getUserState.details.id));
    }, []);

    let achievedScoreInfo = useSelector(({ achieveState }) => { return achieveState.infoAchieve });
    console.log(achievedScoreInfo)

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
                        <Text style={styles.caption}>Achievements</Text>

                        <ImageBackground style={styles.catItem} source={require('../../assets/instruction3.png')} >

                            <View style={{ width: '100%', flexDirection: 'row', marginBottom: 40, justifyContent: 'center' }}>

                                <TouchableOpacity style={styles.catItemImageBorder} >
                                    <Image style={styles.catItemImage}
                                        source={require('../../assets/user1_1.png')}
                                    />

                                    <ImageBackground style={styles.profilePositionHolderDetails} source={require('../../assets/catBg0.png')} >
                                        <Text style={styles.profilePositionHolderPositionName}>{getUserState.details.username}</Text>
                                        <Image style={styles.profilePositionHolderPositionMedal}
                                            source={require('../../assets/medalBronze.png')}
                                        />
                                    </ImageBackground>

                                </TouchableOpacity>

                            </View>

                            <View style={{ width: '80%', marginBottom: 20 }}>
                                <Text style={styles.badgesText}>Badges</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', }}>
                                    <Image style={styles.badgesBadge}
                                        source={require('../../assets/medalBronze.png')}
                                    />
                                    <Image style={styles.badgesBadge}
                                        source={require('../../assets/medalGold.png')}
                                    />
                                    <Image style={styles.badgesBadge}
                                        source={require('../../assets/medalSilver.png')}
                                    />
                                </View>

                            </View>

                            <View style={{ width: '80%' }}>

                                {/* <View style={styles.profileRow}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowCategory}>Science</Text>
                                    </View>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowScore}>1090</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/medalGold.png')} />
                                    </View>
                                </View> */}

                                {
                                    (achievedScoreInfo)
                                        ?
                                        (
                                            achievedScoreInfo.map((item, index) => {
                                                return (

                                                    <View style={styles.profileRow} key={index} >
                                                        <View style={{ width: '45%' }}>
                                                            <Text style={styles.profileRowCategory}>{item.categoryName}</Text>
                                                        </View>
                                                        <View style={{ width: '45%' }}>
                                                            <Text style={styles.profileRowScore}>{item.userCategoryScore}</Text>
                                                        </View>
                                                        <View style={{ width: '10%' }}>
                                                            <Image style={styles.profileRowImage} source={require('../../assets/medalGold.png')} />
                                                        </View>
                                                    </View>

                                                );
                                            })
                                        )
                                        :
                                        (null)
                                }

                                {/* <View style={styles.profileRow}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowCategory}>Geography</Text>
                                    </View>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowScore}>3220</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/medalBronze.png')} />
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowCategory}>Sports</Text>
                                    </View>
                                    <View style={{ width: '45%' }}>
                                        <Text style={styles.profileRowScore}>2220</Text>
                                    </View>
                                    <View style={{ width: '10%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/medalSilver.png')} />
                                    </View>
                                </View> */}

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
    badgesText: {
        fontSize: 18,
        textAlign: 'left',
        color: '#fff',
        fontFamily: 'Slackey-Regular'
    },
    badgesBadge: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginEnd: 10,
        marginBottom: 10
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
    profileRowCategory: {
        textAlign: 'left',
        color: '#1393e7',
        fontFamily: 'Slackey-Regular',
        marginLeft: 5
    },
    profileRowScore: {
        textAlign: 'center',
        color: '#ff5200',
        fontFamily: 'Slackey-Regular'
    }

});

export default Achievements;

