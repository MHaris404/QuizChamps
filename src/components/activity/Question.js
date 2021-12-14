import React, { useEffect, useState, useRef } from 'react';
import { Image, ImageBackground, View, StyleSheet, Text, TouchableOpacity, ScrollView, TouchableOpacityBase, ToastAndroid } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';

import { useDispatch, useSelector } from 'react-redux';
import { funcPostScoreCat } from '../../redux/actions/selectionAction';

const Question = React.memo(({ navigation }) => {

    const dispatch = useDispatch()
    const intervalRef = useRef(null)

    useEffect(() => {
        setCount(0)
        setcurQ({ data: getQuestions[0] })
        setDis(true)
        setSel1(false)
        setSel2(false)
        setSel3(false)
        setSel4(false)

        clearInterval(intervalRef.current)
        startTimer(questionTime)
    }, [])

    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    //submit options
    const [selOpt, setSelOpt] = useState(0)
    //next/submit button
    const [dis, setDis] = useState(true)
    //color of option
    const [sel1, setSel1] = useState(false)
    const [sel2, setSel2] = useState(false)
    const [sel3, setSel3] = useState(false)
    const [sel4, setSel4] = useState(false)

    //given values
    let getUserState = useSelector(({ userState }) => userState.infoUser);
    let authToken = getUserState.token
    let selectedCatInfo = useSelector(({ selectState }) => { return selectState.catInfo });

    //quiz current question
    let getQuesState = useSelector(({ quesState }) => { return quesState.infoQues })
    let getQuestions = getQuesState.result

    // timer
    let timeGet = selectedCatInfo.categoryTime.split(":")
    let totalTime = parseInt(timeGet[0]) * 60 + parseInt(timeGet[1])
    let questionTime = totalTime / getQuesState.result.length; //in seconds

    const stopTime = () => clearInterval(intervalRef.current)

    const startTimer = (duration) => {
        var timer = duration,
            minutes,
            seconds;
        intervalRef.current = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            if (timer-- === 0) {
                clearInterval(intervalRef.current)
            }
            //else 
            if (minutes < 1 && seconds < 1) {
                if (count < getQuesState.result.length - 1) {
                    setCount(++count)
                    setcurQ({ data: getQuestions[count] })
                    setDis(true)
                    setSel1(false)
                    setSel2(false)
                    setSel3(false)
                    setSel4(false)

                    clearInterval(intervalRef.current)
                    // stopTime()
                    startTimer(questionTime)

                } else if (count == getQuestions.length - 1) {

                    setCount(0)
                    setcurQ({ data: getQuestions[0] })
                    setDis(true)
                    setSel1(false)
                    setSel2(false)
                    setSel3(false)
                    setSel4(false)

                    clearInterval(intervalRef.current)
                    // stopTime()

                    dispatch(funcPostScoreCat(authToken, getUserState.details.id, selectedCatInfo.id, selOpt, selectedCatInfo.categoryName))
                    // navigation.navigate("Achievements")
                }
            }

            setMinutes(minutes)
            setSeconds(seconds)
        }, 1000);

    };

    let [count, setCount] = useState(0)
    let [curQ, setcurQ] = useState({
        data: getQuestions[0]
    })

    const countIncrementer = () => {
        if (count < getQuesState.result.length - 1) {
            setCount(++count)
            setcurQ({ data: getQuestions[count] })
            setDis(true)
            setSel1(false)
            setSel2(false)
            setSel3(false)
            setSel4(false)

            clearInterval(intervalRef.current)
            startTimer(questionTime)

        } else if (count == getQuestions.length - 1) {

            setCount(0)
            setcurQ({ data: getQuestions[0] })
            setDis(true)
            setSel1(false)
            setSel2(false)
            setSel3(false)
            setSel4(false)

            clearInterval(intervalRef.current)

            dispatch(funcPostScoreCat(authToken, getUserState.details.id, selectedCatInfo.id, selOpt, selectedCatInfo.categoryName))
            navigation.navigate("Achievements")
        }
    }

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
                                <ImageBackground style={styles.toolbarTimerBg} source={require('../../assets/timerBg.png')} >
                                    <Icon style={styles.toolbarTimerItem1} name="clock" size={16} color="#fff" />
                                    {
                                        minutes < 1 && seconds < 10
                                            ?
                                            <Text style={styles.toolbarTimerItem2Warning}>
                                                {minutes}:{seconds}
                                            </Text>
                                            :
                                            <Text style={styles.toolbarTimerItem2}>
                                                {minutes}:{seconds}
                                            </Text>
                                    }
                                </ImageBackground>
                            </View>
                        </View>
                    </View>

                    <View style={styles.body}>

                        <ImageBackground style={styles.catItem} source={require('../../assets/catBg0.png')} >

                            <ImageBackground style={styles.catItem2} source={require('../../assets/catBg0.png')} >
                                <Image style={styles.catItemImage2} source={require('../../assets/catSports.png')} />

                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ width: '65%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#fff', fontSize: 12, includeFontPadding: false, fontFamily: 'Slackey-Regular', marginEnd: 5, padding: 3 }}>
                                            {selectedCatInfo.categoryName}
                                        </Text>
                                    </View>
                                    <View style={{ width: '30%' }}>
                                        <Text style={{ color: '#fff', fontSize: 12, includeFontPadding: false, fontFamily: 'Slackey-Regular', padding: 3 }}>
                                            {count + 1}/
                                            {getQuesState.result.length}
                                        </Text>
                                    </View>
                                </View>
                            </ImageBackground>

                            <View style={{ padding: 20, flexDirection: 'row', height: '100%' }}>
                                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={styles.catItemText2}>Q.
                                        {count + 1}
                                        .0</Text>
                                </View>
                                <View style={{ width: '75%', height: '100%' }}>
                                    <Text style={styles.catItemText}>
                                        {curQ.data.question}
                                    </Text>
                                </View>
                            </View>
                        </ImageBackground>

                        <View style={styles.answers}>

                            <TouchableOpacity style={styles.option} onPress={() => {
                                setSel1(true)
                                setSel2(false)
                                setSel3(false)
                                setSel4(false)
                                setDis(false)
                                if (curQ.data.option1 == curQ.data.correctOption) {
                                    setSelOpt(selOpt + selectedCatInfo.categoryScore)
                                } else {
                                    setSelOpt(selOpt - selectedCatInfo.categoryScore)
                                }
                            }}>
                                <ImageBackground style={styles.optionItem} source={require('../../assets/optionBgValue.png')} >

                                    <ImageBackground style={styles.optionItemImage} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.optionItemImageText}>A</Text>
                                    </ImageBackground>

                                    <View style={{ flexDirection: 'row' }} >
                                        <View style={styles.optionItemText}>
                                            <Text style={{ color: sel1 ? 'purple' : 'white', fontSize: 20, includeFontPadding: false, fontFamily: 'Slackey-Regular' }}>
                                                {curQ.data.option1}
                                            </Text>
                                        </View>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => {
                                setSel1(false)
                                setSel2(true)
                                setSel3(false)
                                setSel4(false)
                                setDis(false)
                                if (curQ.data.option2 == curQ.data.correctOption) {
                                    setSelOpt(selOpt + selectedCatInfo.categoryScore)
                                } else {
                                    setSelOpt(selOpt - selectedCatInfo.categoryScore)
                                }
                            }}>
                                <ImageBackground style={styles.optionItem} source={require('../../assets/optionBgValue.png')} >

                                    <ImageBackground style={styles.optionItemImage} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.optionItemImageText}>B</Text>
                                    </ImageBackground>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.optionItemText}>
                                            <Text style={{ color: sel2 ? 'purple' : 'white', fontSize: 20, includeFontPadding: false, fontFamily: 'Slackey-Regular' }}>
                                                {curQ.data.option2}
                                            </Text>
                                        </View>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => {
                                setSel1(false)
                                setSel2(false)
                                setSel3(true)
                                setSel4(false)
                                setDis(false)
                                if (curQ.data.option3 == curQ.data.correctOption) {
                                    setSelOpt(selOpt + selectedCatInfo.categoryScore)
                                } else {
                                    setSelOpt(selOpt - selectedCatInfo.categoryScore)
                                }
                            }}>
                                <ImageBackground style={styles.optionItem} source={require('../../assets/optionBgValue.png')} >

                                    <ImageBackground style={styles.optionItemImage} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.optionItemImageText}>C</Text>
                                    </ImageBackground>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.optionItemText}>
                                            <Text style={{ color: sel3 ? 'purple' : 'white', fontSize: 20, includeFontPadding: false, fontFamily: 'Slackey-Regular' }}>
                                                {curQ.data.option3}
                                            </Text>
                                        </View>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.option} onPress={() => {
                                setSel1(false)
                                setSel2(false)
                                setSel3(false)
                                setSel4(true)
                                setDis(false)
                                if (curQ.data.option4 == curQ.data.correctOption) {
                                    setSelOpt(selOpt + selectedCatInfo.categoryScore)
                                } else {
                                    setSelOpt(selOpt - selectedCatInfo.categoryScore)
                                }
                            }}>
                                <ImageBackground style={styles.optionItem} source={require('../../assets/optionBgValue.png')} >

                                    <ImageBackground style={styles.optionItemImage} source={require('../../assets/optionBgIndex.png')} >
                                        <Text style={styles.optionItemImageText}>D</Text>
                                    </ImageBackground>

                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.optionItemText}>
                                            <Text style={{ color: sel4 ? 'purple' : 'white', fontSize: 20, includeFontPadding: false, fontFamily: 'Slackey-Regular' }}>
                                                {curQ.data.option4}
                                            </Text>
                                        </View>
                                    </View>

                                </ImageBackground>
                            </TouchableOpacity>

                        </View>

                        <TouchableOpacity
                            disabled={dis}
                            style={styles.btnNextContainer}
                            onPress={() => { countIncrementer() }}>
                            <ImageBackground
                                source={require('../../assets/instruction2.png')}
                                style={styles.btnNextBackground} />
                            <View
                                style={styles.btnNextTextContainer}>
                                <Text style={styles.btnNextText}>{count == getQuestions.length - 1 ? "SUBMIT" : "NEXT"}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>
        </LinearGradient >

    );
})

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
        alignItems: 'center'
    },
    toolbarEnd: {
        flexDirection: 'row',
    },
    toolbarTimerBg: {
        width: 70,
        height: 35,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    toolbarTimerItem1: {
        width: 17,
        height: 17,
        margin: 5
    },
    toolbarTimerItem2: {
        fontSize: 11,
        color: '#fff',
        includeFontPadding: false,
        fontFamily: 'Slackey-Regular',
    },
    toolbarTimerItem2Warning: {
        fontSize: 11,
        color: '#ffc415',
        includeFontPadding: false,
        fontFamily: 'Slackey-Regular',
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
        height: 180,
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
        marginVertical: 40,
        paddingVertical: 20,
    },
    catItemImage: {
        width: 100,
        height: 80,
        position: 'absolute',
        top: -30,
        resizeMode: "contain",
    },
    catItemText: {
        color: "#fff",
        fontFamily: "Slackey-Regular",
        fontSize: 11,
        textAlign: 'left'
    },
    catItem2: {
        width: 120,
        height: 55,
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
    },
    catItemImage2: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: -15,
        resizeMode: "contain",
    },
    catItemText2: {
        color: "#fff",
        fontFamily: "Slackey-Regular",
        textAlign: 'left',
    },
    answers: {
        width: '100%',
        height: 300,
        marginBottom: 40,
    },
    option: {
        position: 'relative',
        width: '100%',
        height: 70,
        marginBottom: 10,
    },
    optionItem: {
        width: '100%',
        height: 70,
        resizeMode: "contain",
        elevation: 5,
        justifyContent: 'center',
        position: 'relative',
        alignItems: 'center',
    },
    optionItemText: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionItemImage: {
        width: 85,
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        resizeMode: "contain",
        justifyContent: 'center'
    },
    optionItemImageText: {
        color: '#fff',
        fontSize: 36,
        includeFontPadding: false,
        fontFamily: 'Slackey-Regular',
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

export default Question;