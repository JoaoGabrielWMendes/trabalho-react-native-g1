import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import { getProducts } from "../services/productService";

const categories = [
    { id: "", label: "All" },
    { id: "electronics", label: "Electronics" },
    { id: "jewelery", label: "Jewelery" },
    { id: "men's clothing", label: "Men's Clothing" },
    { id: "women's clothing", label: "Women's Clothing" },
];

export default function ProductList({ navigation }) {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    const [selectedCategory, setSelectedCategory] = useState("");

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

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#2563eb" />
            </View>
        );
    }

    const filteredItems = selectedCategory === ""
        ? items
        : items.filter(item => item.category === selectedCategory);

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
            <TouchableOpacity
                style={styles.fab}
                activeOpacity={0.8}
                onPress={() => navigation.navigate("Info")}
            >
                <Text style={styles.fabIcon}>ℹ️</Text>
            </TouchableOpacity>

            <Text style={styles.pageTitle}>Produtos</Text>

            <View style={styles.filterContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.filterScroll}
                >
                    {categories.map((cat) => (
                        <TouchableOpacity
                            key={cat.id}
                            style={[
                                styles.filterButton,
                                selectedCategory === cat.id && styles.filterButtonActive
                            ]}
                            onPress={() => setSelectedCategory(cat.id)}
                        >
                            <Text
                                style={[
                                    styles.filterText,
                                    selectedCategory === cat.id && styles.filterTextActive
                                ]}
                            >
                                {cat.label}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            <FlatList
                data={filteredItems}
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
        paddingTop: 60,
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
        marginBottom: 10,
    },

    filterContainer: {
        marginBottom: 15,
        height: 45,
    },
    filterScroll: {
        alignItems: "center",
        paddingRight: 20,
    },
    filterButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: "#ffffff",
        borderRadius: 20,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#bfdbfe",
    },
    filterButtonActive: {
        backgroundColor: "#2563eb",
        borderColor: "#2563eb",
    },
    filterText: {
        color: "#1d4ed8",
        fontWeight: "bold",
    },
    filterTextActive: {
        color: "#ffffff",
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
        top: 55,
        right: 20,
        width: 58,
        height: 58,
        borderRadius: 30,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        shadowColor: "transparent",
        elevation: 0,
    },
    fabIcon: {
        fontSize: 35,
        color: "#2563eb",
    },
});