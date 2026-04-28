import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function ProductDetail({ route, navigation }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.title}</Text>

        <Text style={styles.price}>
          R$ {product.price}
        </Text>

        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>
            {product.category}
          </Text>
        </View>

        <Text style={styles.descriptionTitle}>
          Descrição
        </Text>

        <Text style={styles.description}>
          {product.description}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>
            Voltar
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#dbeafe",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 22,
    padding: 25,
    alignItems: "center",

    shadowColor: "#2563eb",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 8,
  },

  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1d4ed8",
    textAlign: "center",
    marginBottom: 15,
  },

  price: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 15,
  },

  categoryBox: {
    backgroundColor: "#bfdbfe",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },

  categoryText: {
    color: "#1e3a8a",
    fontWeight: "600",
    textTransform: "capitalize",
  },

  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1e293b",
    alignSelf: "flex-start",
    marginBottom: 8,
  },

  description: {
    fontSize: 16,
    color: "#475569",
    textAlign: "justify",
    lineHeight: 24,
    marginBottom: 25,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 14,
    paddingHorizontal: 35,
    borderRadius: 14,
    shadowColor: "#1d4ed8",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});