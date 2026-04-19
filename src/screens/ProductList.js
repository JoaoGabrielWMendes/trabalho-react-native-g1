import { useEffect, useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image, FlatList, TouchableOpacity} from "react-native";
import { getProducts } from "../services/productService";

export default function ProductList( { navigation }) {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: "Lista de Produtos",
      headerTitleAlign: "center",
      headerLeft: ()=>{
        return <Button title="Logout" />
      },
      headerRight: ()=>{
        return <Button title="Grupo" />
      },
    });
  }, []);
  
  useEffect(() => {
    setLoading(true);
    const response = getItems();
    setItems(response.data);
    setLoading(false);
  }, []);
//n é legal usar async direto no useEffect, por isso criei a função getItems

  async function getItems() {
    const response = await getProducts();
    console.log(response);
  }

  if (loading) {
    <View style={styles.container}>
      <ActivityIndicator size={"large"} color="#00000f" />
    </View>;
  }

//  return (
  //  <ScrollView style={styles.containerScroll}>
    //  {
      //  items.map((produto) => (
        //<View>
          //<Text>{produto.title}</Text>
        //  <Text>{produto.price}</Text>
          //<Text>{{uri: produto.imageUrl}}</Text>
      //  </View>
       // ))
     // }
   // </ScrollView>
  //);
//}

return (
  <TouchableOpacity style={styles.container}>
    <FlatList
     data={items}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ fontSize: 16 }}>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  </TouchableOpacity>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    alignItems: "center",
    justifyContent: "center"
  },
  containerScroll: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
