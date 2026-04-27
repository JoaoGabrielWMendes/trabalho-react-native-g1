import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { getProducts } from "../services/productService";

export default function ProductList({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Header estilizado azul
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Lista de Produtos",
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "#2563eb",
      },
      headerTintColor: "#fff",
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
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  // Render produto
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
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
      {/* Botão Info */}
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Info")}
      >
        <Text style={styles.fabIcon}>ℹ️</Text>
      </TouchableOpacity>

      {/* Título visual */}
      <Text style={styles.pageTitle}>Produtos</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={renderProduct}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dbeafe",
    paddingHorizontal: 12,
    paddingTop: 15,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dbeafe",
  },

  pageTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1d4ed8",
    textAlign: "center",
    marginBottom: 20,
  },

  listContent: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "48%",
    padding: 14,
    marginBottom: 16,
    borderRadius: 18,
    alignItems: "center",

    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,

    elevation: 5,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
    color: "#1e293b",
    minHeight: 40,
  },

  price: {
    fontSize: 18,
    color: "#2563eb",
    fontWeight: "bold",
  },

  fab: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,

    shadowColor: "#1d4ed8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    elevation: 8,
  },

  fabIcon: {
    fontSize: 24,
    color: "#fff",
  },
});