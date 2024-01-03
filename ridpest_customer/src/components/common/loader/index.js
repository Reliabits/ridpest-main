import {ActivityIndicator, Modal, StyleSheet, Text, View} from "react-native";
import React from "react";
import AppColors from "../../../utils/ColorApp";

const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator style={styles.loading} size="large" color={AppColors.darkSeaGreen2} />
      </View>
    </View>
  );
};

export {Loader};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000060",
    zIndex: 999,
  },
  loading: {
    padding: 30,
    width: "50%",
    backgroundColor: "white",
  },
});
