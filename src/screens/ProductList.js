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
} from "react-native";
import { getProducts } from "../services/productService";

export default function ProductList({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  // Configuração do cabeçalho
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Lista de Produtos",
      headerTitleAlign: "center",
      headerRight: () => (
        <Button
          title="Info"
          onPress={() => navigation.navigate("Info")}
        />
      ),
    });
  }, [navigation]);

  // Buscar produtos da API
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

  // Tela de carregamento
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Renderização de cada produto
  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
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

      <Text style={styles.price}>
        R$ {item.price}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
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
    backgroundColor: "#f9f9f9",
    width: "48%",
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },

  price: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
});