import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import RecipeDetailScreen from "./screens/RecipeDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MyRecipesScreen from "./screens/MyRecipesScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  // Global state (simple, no backend, no drama)
  const [favorites, setFavorites] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#ff7043" },
          headerTintColor: "#fff",
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <HomeScreen
              {...props}
              favorites={favorites}
              setFavorites={setFavorites}
              myRecipes={myRecipes}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Details">
          {(props) => (
            <RecipeDetailScreen
              {...props}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Favorites">
          {(props) => (
            <FavoritesScreen
              {...props}
              favorites={favorites}
              myRecipes={myRecipes}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="MyRecipes">
          {(props) => (
            <MyRecipesScreen
              {...props}
              myRecipes={myRecipes}
              setMyRecipes={setMyRecipes}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddRecipe">
          {(props) => (
            <AddRecipeScreen
              {...props}
              myRecipes={myRecipes}
              setMyRecipes={setMyRecipes}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
