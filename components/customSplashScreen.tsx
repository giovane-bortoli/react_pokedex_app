import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet, View } from "react-native";

export default function CustomSplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    SplashScreen.hideAsync();
    const timer = setTimeout(onFinish, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../assets/animations/pokeballLoading.json")}
        autoPlay
        loop={false}
        style={styles.lottie}
        onAnimationFinish={onFinish}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC0A2D",
    alignItems: "center",
    justifyContent: "center",
  },
  lottie: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
  },
});
