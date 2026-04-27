import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    // Chamar a API aqui
    axios.post('https://fakestoreapi.com/auth/login', {
      username: 'seu_usuario',
      password: 'sua_senha'
    })
    .then((response) => {
      setLogin(true);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <View style={styles.container}>
      {login ? (
        <Text>Login bem-sucedido!</Text>
      ) : (
        <Button title="Entrar" onPress={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
