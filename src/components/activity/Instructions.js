import React from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

const Instructions = ({ navigation }) => {
    return (
        <LinearGradient colors={['#b81592', '#23044e', '#000036']} style={{ height: '100%' }} >
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.container}>
                    <View style={styles.headerContainer}>
                        <View style={styles.toolbar}>
                            <View >
                                <Image style={{ width: 40, height: 30 }} />
                            </View>
                            <View style={styles.toolbarEnd}>

                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.caption}>INSTRUCTIONS</Text>

                        <ImageBackground style={styles.catItem} source={require('../../assets/instruction3.png')} >
                            <Image style={styles.catItemImage} source={require('../../assets/instruction1.png')} />
                            <View style={{ padding: 20 }}>
                                <Text style={styles.catItemText}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                            </View>
                        </ImageBackground>

                        <TouchableOpacity style={styles.btnNextContainer} onPress={() => navigation.navigate('Question')}>
                            <ImageBackground
                                source={require('../../assets/instruction2.png')}
                                style={styles.btnNextBackground} />
                            <View
                                style={styles.btnNextTextContainer}>
                                <Text style={styles.btnNextText}>NEXT</Text>
                            </View>
                        </TouchableOpacity>
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
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        marginVertical: 40,
        paddingVertical: 20,
    },
    catItemImage: {
        // width: 100,
        height: 80,
        position: 'absolute',
        top: -20,
        resizeMode: "contain",
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
    }
});

export default Instructions;