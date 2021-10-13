import React, { useRef, useState, useEffect } from "react";
import { Dimensions, ScrollView } from 'react-native';
import { ImageBackground, Pressable, Modal, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, NativeBaseProvider
} from 'native-base';

import CloseOnBackPress from '../../libs/CloseOnBackPress';
import { funcGETCat } from "../../redux/actions/gameAction";
import { funcCATID } from "../../redux/actions/selectionAction";

import { funcGETQues } from '../../redux/actions/gameAction'

const HomeScreenDashboard = ({ navigation }) => {

  const dispatch = useDispatch();
  const { width, height } = Dimensions.get('window');

  let getUserState = useSelector(({ userState }) => userState.infoUser);
  let authToken = getUserState.token

  const [modalVisible, setModalVisible] = useState(false);
  const closeDialog = () => { setModalVisible(false) }

  useEffect(() => {
    dispatch(funcGETCat(authToken));
  }, []);

  const getCatState = useSelector(({ catState }) => { return catState.infoCat })

  return (
    <NativeBaseProvider>
      <View >
        <CloseOnBackPress />

        <ScrollView showsVerticalScrollIndicator={false} >

          <LinearGradient colors={['#b81592', '#23044e', '#000036']} >

            <View style={{ paddingVertical: 15, paddingHorizontal: 20, height: height }}>

              <View style={styles.toolbar}>
                <View style={styles.headerContainer}>
                  <TouchableOpacity onPress={navigation.openDrawer}>
                    <Image style={{ width: 40, height: 30 }} source={require('../../assets/boorger.png')} />
                  </TouchableOpacity>
                  <View style={styles.toolbarEnd}>
                  </View>
                </View>
              </View>

              <View style={styles.toolbarContainer}>
                <Text style={styles.caption}>WELCOME BACK!</Text>
                <Text style={styles.captionBold}>{getUserState.details.username}</Text>

                <ScrollView showsVerticalScrollIndicator={false} >
                  <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                    {
                      (getCatState)
                        ?
                        (
                          getCatState.result.map((item, index) => {
                            return (

                              <View style={styles.centeredView} key={index} >
                                <Modal
                                  animationType="slide"
                                  transparent={true}
                                  visible={modalVisible}
                                  onRequestClose={() => {
                                    setModalVisible(!modalVisible);
                                  }}>

                                  <View style={styles.centeredView}>
                                    <View style={styles.modalView}>

                                      <View style={styles.body}>
                                        <Text style={styles.caption}>INSTRUCTIONS</Text>

                                        <ImageBackground style={styles.catItemInstruction} source={require('../../assets/instruction3.png')} >
                                          <Image style={styles.catItemImageInstruction} source={require('../../assets/instruction1.png')} />
                                          <View style={{ padding: 20 }}>
                                            <Text style={styles.catItemTextInstruction}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</Text>
                                          </View>
                                        </ImageBackground>

                                        <TouchableOpacity style={styles.btnNextContainer} onPress={() => {
                                          setModalVisible(!modalVisible),
                                            navigation.navigate('Question')
                                        }}>
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
                                  </View>
                                </Modal>

                                <TouchableOpacity onPress={() => {
                                  setModalVisible(true),
                                    dispatch(funcCATID(item))
                                    dispatch(funcGETQues(authToken, item.id));
                                }}
                                  style={{
                                    width: 160,
                                    marginHorizontal: 10,
                                    marginVertical: 15,
                                  }}>
                                  <ImageBackground style={styles.catItem} source={require('../../assets/catBg.png')} >
                                    <Image style={styles.catItemImage} source={require('../../assets/catScience.png')} />
                                    <Text style={styles.catItemText}>{item.categoryName}</Text>
                                  </ImageBackground>
                                </TouchableOpacity>
                              </View>


                            );
                          })
                        )
                        :
                        (null)
                    }

                  </View>

                </ScrollView>

              </View>

            </View>

          </LinearGradient>

        </ScrollView>


      </View>

    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({

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
    marginBottom: 100
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
    // marginBottom: 30
  },
  catItem: {
    width: '100%',
    height: 100,
    resizeMode: "cover",
    elevation: 5,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  catItemImage: {
    width: 60,
    height: 50,
    position: 'absolute',
    top: -20,
    resizeMode: "contain",
  },
  catItemText: {
    color: "#fff",
    fontFamily: "Slackey-Regular",
    marginTop: 30,
    fontSize: 18
  },
  centeredView: {
    flex: 1,
    width: '80%',
    // height: '80%',
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: '#000036',
    borderRadius: 0,
    height: '80%',
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
  catItemInstruction: {
    width: '100%',
    resizeMode: "contain",
    elevation: 5,
    justifyContent: 'center',
    position: 'relative',
    alignItems: 'center',
    marginVertical: 30,
    paddingVertical: 15,
  },
  catItemImageInstruction: {
    height: 80,
    position: 'absolute',
    top: -20,
    resizeMode: "contain",
  },
  catItemTextInstruction: {
    color: "#fff",
    fontFamily: "Slackey-Regular",
    marginVertical: 60,
    fontSize: 14,
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


export default HomeScreenDashboard;