import React, { useEffect } from "react";
import { Text, View, BackHandler, Alert } from "react-native";

const CloseOnBackPress = () => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to Exit the App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View >
    </View>
  );
};


export default CloseOnBackPress;