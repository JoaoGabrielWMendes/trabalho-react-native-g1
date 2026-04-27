import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";

export default function VLTextInput({
  passwordInput,
  value,
  onChangeText,
  ...rest
}) {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value || ""}
        onChangeText={onChangeText}
        secureTextEntry={passwordInput && hidePassword}
        autoCapitalize="none"
        autoCorrect={false}
        {...rest}
      />

      {passwordInput && (
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Feather
            name={hidePassword ? "eye-off" : "eye"}
            size={24}
            color="#2563eb"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    borderWidth: 1,
    borderColor: "#93c5fd",
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
  },

  input: {
    fontSize: 18,
    color: "#1e293b",
    flex: 1,
  },
});