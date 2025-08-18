import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const pokeballImage = require("../assets/images/pokeball.png");

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = React.useRef<TextInput>(null);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username.toLowerCase() != null || password.toLowerCase() != null) {
      setError("");
      router.replace("/");
    } else {
      setError("Usuário ou senha inválidos.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={pokeballImage} style={styles.logo} />
        <Text style={styles.title}>Pokédex</Text>
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#A1A1A1"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          returnKeyType="next"
          onSubmitEditing={() => passwordInputRef.current?.focus()}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput
            ref={passwordInputRef}
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="Senha"
            placeholderTextColor="#A1A1A1"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            returnKeyType="done"
            onSubmitEditing={handleLogin}
          />
          <TouchableOpacity
            onPress={() => setShowPassword((prev) => !prev)}
            style={{ marginLeft: 8, padding: 4 }}
            accessibilityLabel={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="#DC0A2D" />
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DC0A2D",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
    tintColor: "#FFF",
  },
  title: {
    color: "#FFF",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 2,
  },
  form: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 16,
    marginBottom: 16,
    color: "#222",
  },
  button: {
    backgroundColor: "#F57D31",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
  error: {
    color: "#DC0A2D",
    marginBottom: 8,
    textAlign: "center",
  },
});
