import api from"./api"

async function getProducts(){
    const response = await api.get("/products");
    try{
    const products = response.data.products.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        imageUrl: product.thumbnail,
    }));
    return {
        data: products,
        sucess:true,
    };
    }catch(error){
        console.error("Erro ao obter produtos:", error);
        return {
            data: null,
            sucess:false,
            erroeMessage: "Erro ao obter produtos",
        }
    }
}

async function getProductById(id){
    try{
    const response = await api.get(`/products/${id}`);

    return {
        data: response.data,
        sucess:true,
    };
    }catch(error){
        console.error("Erro ao obter produtos:", error);
        return {
            data: null,
            sucess:false,
            erroeMessage: "Erro ao obter produtos",
        }
    }
}