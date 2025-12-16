import React from "react";
import { View, Text, FlatList, TouchableOpacity, Button } from "react-native";

export default function MyRecipesScreen({
  navigation,
  myRecipes,
  setMyRecipes,
}) {
  const deleteRecipe = (id) => {
    setMyRecipes((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <View style={{ padding: 10 }}>
      <Button
        title="Add New Recipe"
        onPress={() => navigation.navigate("AddRecipe")}
      />

      <FlatList
        data={myRecipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", { recipe: item })
              }
            >
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
            </TouchableOpacity>

            <Button title="Delete" onPress={() => deleteRecipe(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
