import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import info from "../screens/info";
import ProductList from "../screens/ProductList";
import ProductDetail from "../screens/ProductDetail";
import Login from "../screens/Login"

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}/>
        <AppStack.Screen
          name="Home"
          component={ProductList}
          options={{ headerShown: false }}/>
          <AppStack.Screen
            name="info"
            component={info}
            options={{ title: "Informações do Grupo"}}
            />        
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
