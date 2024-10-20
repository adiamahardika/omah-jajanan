import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./src/screens/SplashScreen";
import FoodListScreen from "./src/screens/FoodListScreen";
import FoodDetailScreen from "./src/screens/FoodDetailScreen";
import { CartProvider } from "./src/context/CartContext";
import CartScreen from "./src/screens/CartScreen";
const Stack = createStackNavigator();

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Food List" component={FoodListScreen} />
          <Stack.Screen name="Food Detail" component={FoodDetailScreen} />
          <Stack.Screen name="Keranjang" component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
