import { Stack } from "expo-router";
import { Image, StyleSheet } from "react-native";

const pokeballImage = require("../assets/images/pokeball.png");
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: "Pokédex",
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#DC0A2D" },
        headerTitleStyle: styles.headerTitle,
        statusBarStyle: "light",
        statusBarHidden: true,
        headerLeft: () => <Image source={pokeballImage} style={styles.headerImage} resizeMode="contain" />,
      }}
    >
      <Stack.Screen name="index" options={{ headerShadowVisible: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  headerImage: {
    width: 32,
    height: 32,
    marginLeft: 12,
    marginRight: 16,
    tintColor: "white",
  },
});
