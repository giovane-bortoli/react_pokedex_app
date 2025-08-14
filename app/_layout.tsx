import { Stack } from "expo-router";
import { Image, Text, View } from "react-native";

const pokeballImage = require("../assets/images/pokeball.png");

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: "#DC0A2D" },
        statusBarStyle: "light",
        statusBarHidden: true,
      }}
    >
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
  );
}
