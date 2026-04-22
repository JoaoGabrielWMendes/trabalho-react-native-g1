import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

export default function VLTextInput({ passwordInput, value, ...rest }) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={rest.value}
        secureTextEntry={passwordInput && hidePassword}
        autoCapitalize="none"
        {...rest}
      />
      {passwordInput && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          {!hidePassword ? (
            <Feather name="eye" size={24} color="black" />
          ) : (
            <Feather name="eye-off" size={24} color="black" />
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    color: "black",
    flex: 1
  },
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 6,
    paddingRight: 15,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});