import api from "./api";

// Buscar todos os produtos
export async function getProducts() {
  try {
    const response = await api.get("/products");

    const products = response.data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      category: product.category,
    }));

    return {
      data: products,
      success: true,
    };
  } catch (error) {
    console.error("Erro ao obter produtos:", error);

    return {
      data: [],
      success: false,
      errorMessage: "Erro ao obter produtos",
    };
  }
}

// Buscar produto por ID
export async function getProductById(id) {
  try {
    const response = await api.get(`/products/${id}`);

    return {
      data: response.data,
      success: true,
    };
  } catch (error) {
    console.error("Erro ao obter produto:", error);

    return {
      data: null,
      success: false,
      errorMessage: "Erro ao obter produto",
    };
  }
}