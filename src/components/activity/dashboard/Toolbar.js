import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Toolbar = () => {
  return (
    <View style={[styles.container]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name="hamburger" size={20} color="#E9D4DB" />
        </TouchableOpacity>
        <View style={styles.toolbarEnd}>
          <TouchableOpacity>
            <Icon name="bell" size={20} color="#E9D4DB" />
          </TouchableOpacity>
          <Image style={styles.headerImage} source={require('../../../assets/doctor.png')} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#fff"
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toolbarEnd: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 24,
    height: 24,
    marginStart: 10
  },
});

export default Toolbar;