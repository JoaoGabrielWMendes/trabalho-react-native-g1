import { useState } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
} from "react-native";

import { login } from "../services/loginService";
import VLTextInput from "../components/VLTextInput";
import VLButton from "../components/VLButton";

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    setLoading(true);

    try {
      await login(username, password);
      navigation.navigate("Home");
    } catch (error) {
      if (error.message === "INVALID_CREDENTIALS") {
        alert("Usuário ou senha incorretos");
        return;
      }

      alert("Erro inesperado");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Entre para acessar sua conta
        </Text>

        {loading ? (
          <ActivityIndicator size="large" color="#2563eb" />
        ) : (
          <>
            <VLTextInput
              value={username}
              onChangeText={setUsername}
              placeholder={"Digite o seu username"}
            />

            <VLTextInput
              passwordInput={true}
              value={password}
              onChangeText={setPassword}
              placeholder={"Digite a sua senha"}
            />

            <View style={styles.buttonContainer}>
              <VLButton
                title="Entrar"
                action={handleLogin}
                disabled={loading}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbeafe",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  loginBox: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#ffffff",
    padding: 30,
    borderRadius: 18,
    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 15,
    color: "#64748b",
    marginBottom: 15,
  },

  buttonContainer: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
});