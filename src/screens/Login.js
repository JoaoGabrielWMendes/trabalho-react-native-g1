import { useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { login } from "../services/loginService"
import VLTextInput from "../components/VLTextInput";
import VLButton from "../components/VLButton";



export default function Login({ navigation }) {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin() {
        setLoading(true)
        try{
            const data = await login (username,password);

            navigation.navigate("Home")
        } catch(error){
            if (error.message === "INVALID_CREDENTIALS"){
                alert("Usuário ou senha incorretos")
                return
            }
            alert("Erro inesperado")
            console.log(error)
        }finally{
            setLoading(false);
        }
        
        
    }
    return (
        <View style={styles.container}>
        {loading? (
            <ActivityIndicator size="large" color="blue"/>
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
        <VLButton
            title="Entrar"
            action={handleLogin}
            disabled={loading}

        />
        </>
        )}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});