import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function VLButton({ title, action, customStyle, secondary }) {
  return (
    <TouchableOpacity
      style={[styles.button, secondary && styles.buttonSecondary, customStyle]}
      onPress={() => action()}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    backgroundColor: "rgb(50, 15, 247)",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  buttonSecondary: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "rgb(50, 15, 247)s",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 600,
    color: "#fff"
  },
});