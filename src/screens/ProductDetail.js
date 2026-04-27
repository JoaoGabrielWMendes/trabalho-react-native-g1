import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function ProductDetail({ route }) {
  const { product } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>{product.title}</Text>

      <Text style={styles.price}>
        R$ {product.price}
      </Text>

      <Text style={styles.category}>
        Categoria: {product.category}
      </Text>

      <Text style={styles.description}>
        {product.description}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    flexGrow: 1,
  },

  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  price: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
    marginBottom: 10,
  },

  category: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 24,
  },
});