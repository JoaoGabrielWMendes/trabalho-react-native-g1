import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
  Button,
  Platform,
} from "react-native";
import { getProducts } from "../services/productService";

export default function ProductList({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Header com botão (opcional)
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Lista de Produtos",
      headerTitleAlign: "center",
    });
  }, [navigation]);

  // Buscar produtos
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
        setItems(response.data);
      } catch (error) {
        console.log("Erro ao buscar produtos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Loading
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  // Render produto
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          product: item,
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>

      <Text style={styles.price}>R$ {item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* BOTÃO BONITO (FAB) */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.fabIcon}>ℹ️</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderProduct}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 10,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#fff",
    width: "48%",
    padding: 12,
    marginBottom: 15,
    borderRadius: 15,
    alignItems: "center",

    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,

    // sombra Android
    elevation: 4,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 5,
    color: "#333",
  },

  price: {
    fontSize: 16,
    color: "#2ECC71",
    fontWeight: "bold",
  },

  // FAB bonito
  fab: {
    position: "absolute",
    top: 15,
    right: 15,
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: "#4A90E2",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,

    // sombra iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // sombra Android
    elevation: 8,
  },

  fabIcon: {
    fontSize: 22,
    color: "#fff",
  },
});