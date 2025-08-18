import CustomSplashScreen from "@/components/customSplashScreen";
import ReactQueryProvider from "@/services/reactQuery/reactQueryProvider";
import { Stack } from "expo-router";
import { useCallback, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const pokeballImage = require("../assets/images/pokeball.png");

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = useCallback(() => setShowSplash(false), []);

  if (showSplash) {
    return <CustomSplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ReactQueryProvider>
        <Stack
          initialRouteName="login"
          screenOptions={{
            headerShadowVisible: false,
            headerStyle: { backgroundColor: "#DC0A2D" },
            statusBarStyle: "light",
            statusBarHidden: true,
          }}
        >
          <Stack.Screen
            name="login"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="index"
            options={{
              headerTitle: () => (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={pokeballImage} style={{ width: 32, height: 32, tintColor: "white", marginRight: 8 }} />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize: 24 }}>Pokédex</Text>
                </View>
              ),
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="pokemon_details"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </ReactQueryProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
