import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView, SafeAreaView, Platform, PermissionsAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const TopScorers = ({ navigation }) => {

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

                                <TouchableOpacity style={styles.catItemImageBorder} >
                                    <Image style={styles.catItemImage}
                                        source={require('../../assets/user1_1.png')}
                                    />
                                    <ImageBackground style={styles.profilePositionHolder} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.profilePositionHolderPosition}>2</Text>
                                    </ImageBackground>

                                    <ImageBackground style={styles.profilePositionHolderDetails} source={require('../../assets/catBg0.png')} >
                                        <Text style={styles.profilePositionHolderPositionScore}>5620</Text>
                                        <Text style={styles.profilePositionHolderPositionName}>Alia</Text>
                                        <Image style={styles.profilePositionHolderPositionMedal}
                                            source={require('../../assets/medalBronze.png')}
                                        />
                                    </ImageBackground>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.catItemImageBorder} >
                                    <Image style={styles.catItemImage}
                                        source={require('../../assets/user1_2.png')}
                                    />
                                    <ImageBackground style={styles.profilePositionHolder} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.profilePositionHolderPosition}>1</Text>
                                    </ImageBackground>

                                    <ImageBackground style={styles.profilePositionHolderDetails} source={require('../../assets/catBg0.png')} >
                                        <Text style={styles.profilePositionHolderPositionScore}>8832</Text>
                                        <Text style={styles.profilePositionHolderPositionName}>Sameer</Text>
                                        <Image style={styles.profilePositionHolderPositionMedal}
                                            source={require('../../assets/medalGold.png')}
                                        />
                                    </ImageBackground>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.catItemImageBorder} >
                                    <Image style={styles.catItemImage}
                                        source={require('../../assets/user1_3.png')}
                                    />
                                    <ImageBackground style={styles.profilePositionHolder} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.profilePositionHolderPosition}>3</Text>
                                    </ImageBackground>

                                    <ImageBackground style={styles.profilePositionHolderDetails} source={require('../../assets/catBg0.png')} >
                                        <Text style={styles.profilePositionHolderPositionScore}>3480</Text>
                                        <Text style={styles.profilePositionHolderPositionName}>Hasan</Text>
                                        <Image style={styles.profilePositionHolderPositionMedal}
                                            source={require('../../assets/medalSilver.png')}
                                        />
                                    </ImageBackground>

                                </TouchableOpacity>

                            </View>

                            <View style={{ width: '80%' }}>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '15%' }}>
                                        <Text style={styles.profileRowPosition}>4</Text>
                                    </View>
                                    <View style={{ width: '15%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/user2.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.profileRowName}>Asghar</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={styles.profileRowScore}>4420</Text>
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '15%' }}>
                                        <Text style={styles.profileRowPosition}>5</Text>
                                    </View>
                                    <View style={{ width: '15%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/user2.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.profileRowName}>Haris</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={styles.profileRowScore}>3420</Text>
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '15%' }}>
                                        <Text style={styles.profileRowPosition}>6</Text>
                                    </View>
                                    <View style={{ width: '15%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/user2.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.profileRowName}>Saad</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={styles.profileRowScore}>3220</Text>
                                    </View>
                                </View>

                                <View style={styles.profileRow}>
                                    <View style={{ width: '15%' }}>
                                        <Text style={styles.profileRowPosition}>7</Text>
                                    </View>
                                    <View style={{ width: '15%' }}>
                                        <Image style={styles.profileRowImage} source={require('../../assets/user2.png')} />
                                    </View>
                                    <View style={{ width: '50%' }}>
                                        <Text style={styles.profileRowName}>Aizaz</Text>
                                    </View>
                                    <View style={{ width: '20%' }}>
                                        <Text style={styles.profileRowScore}>1090</Text>
                                    </View>
                                </View>

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

